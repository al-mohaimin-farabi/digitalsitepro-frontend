import initializeFirebase from "../Pages/Auth/Firebase.init";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateProfile,
  getIdToken,
  sendEmailVerification,
  // signInWithRedirect,
  signInWithPopup,
  sendPasswordResetEmail,
  TwitterAuthProvider,
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [passResetEmailSend, setPassResetEmailSend] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isadmin, setAdmin] = useState(false);
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);
  const [userEmailVerified, setUserEmailVerified] = useState(false);
  const [userPhone, setUserPhone] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  //register user
  const registerUser = async (email, password, name, location, navigate) => {
    function getRedirectUrl() {
      // Implement your logic to determine the desired redirect URL
      // based on location.state.from or other factors

      const destination = location?.state?.from?.pathname || "/";
      return `http://localhost:5173${destination}`;

      // Example URL construction
    }
    // console.log(location?.state?.from?.pathname);
    // console.log(getRedirectUrl());

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update user profile
      await updateProfile(userCredential.user, { displayName: name }); // Use userCredential.user

      // Send email verification with continue URL
      const actionCodeSettings = {
        url: getRedirectUrl(), // Replace with your verification page
        handleCodeInApp: true, // Optional: Handle link in app if installed
      };
      await sendEmailVerification(userCredential.user, actionCodeSettings);

      // Handle email verification state
      if (!userCredential.user.emailVerified) {
        setAuthError("Please verify your email before proceeding.");
      } else {
        // Email verified, proceed with registration
        setAuthError("");

        // Save user to the database
        saveUser(email, name, "POST");

        const newUser = { email, displayName: name };
        setUser(newUser);
        if (user?.email && user?.emailVerified) {
          const destination = location?.state?.from || "/";
          navigate(destination);
        }
      }
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setIsLoading(false); // Always set loading to false
    }
  };

  //login user
  const loginUser = async (email, password, location, navigate) => {
    setIsLoading(true);

    try {
      // eslint-disable-next-line no-unused-vars
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const destination = location?.state?.from || "/";
      navigate(destination);
      setAuthError("");
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // google signing
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;

        // update user to database if exsist
        saveUser(user.email, user.displayName, "PUT");

        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // facebook singing
  const signInWithFacebook = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // twitter singin
  const signInWithTwitter = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //passreset
  const handleResetPassword = (email) => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent successfully
        console.log("Password reset email sent.");
        setPassResetEmailSend(true);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle errors (e.g., invalid email, network issues)
        setIsLoading(false);
        setAuthError(error.message);
        console.error("Error sending password reset email:", error);
      });
  };

  // observer user state || login-logout state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          localStorage.setItem("idToken", idToken);
        });

        // Check if the user's email is verified
        setUserEmailVerified(user.emailVerified);
        setEmailVerificationSent(!user.emailVerified);
      } else {
        setUser({});
      }

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  //update user name
  const handleDisplayNameChange = async (name) => {
    const user = auth.currentUser;

    if (!user?.email || !user?.emailVerified) {
      // If no user is signed in, handle the error
      console.error("No user signed in");
      return;
    }
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = name;
      const email = user?.email;
      const photoURL = user?.photoURL;
      const emailVerified = user?.emailVerified;

      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          const user = { email, displayName, photoURL, emailVerified };

          setUser(user);
        })
        .catch((error) => {
          // An error occurred
          console.log(error);
        });
    }
  };

  // Check user role
  useEffect(() => {
    async function isAdmin() {
      if (!user || !user.email) return; // Check if user or user.email is undefined/null
      try {
        const url = `http://localhost:5000/users/${user.email}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch user role");
        }
        const data = await response.json();
        setAdmin(data.admin);
      } catch (error) {
        console.error("Error fetching user role:", error);
        // Handle error state if needed
      }
    }
    isAdmin();
  }, [user.email]);

  // Get user info
  useEffect(() => {
    async function userPhone() {
      if (!user || !user.email) return; // Check if user or user.email is undefined/null
      try {
        const url = `http://localhost:5000/users/phone/${user.email}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("The user didn't update the phone number");
        }
        const data = await response.json();
        setUserPhone(data.phoneNumber);
      } catch (error) {
        console.error("Error fetching user phone number:", error);
        // Handle error state if needed
      }
    }
    userPhone();
  }, [user.email]);

  // logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  //  save user to the data base || check user email exsist or not
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch(import.meta.env.VITE_REACT_APP_SAVE_USER_URL, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    isadmin,
    userPhone,
    isLoading,
    authError,
    userEmailVerified,
    emailVerificationSent,
    setUserPhone,
    handleDisplayNameChange,
    setAuthError,
    registerUser,
    loginUser,
    logout,
    signInWithGoogle,
    signInWithTwitter,
    signInWithFacebook,
    handleResetPassword,
    passResetEmailSend,
  };
};

export default useFirebase;

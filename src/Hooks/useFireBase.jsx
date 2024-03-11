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
  signInWithRedirect,
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
  // const [admin, setAdmin] = useState(false);
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);
  const [userEmailVerified, setUserEmailVerified] = useState(false);

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

  // google signin
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithRedirect(auth, googleProvider)
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

  // facebook signin
  const signInWithFacebook = (location, navigate) => {
    setIsLoading(true);
    signInWithRedirect(auth, facebookProvider)
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
  // twitter signin
  const signInWithTwitter = (location, navigate) => {
    setIsLoading(true);
    signInWithRedirect(auth, twitterProvider)
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

  // // check user role
  // useEffect(() => {
  //   async function isAdmin() {
  //     const url = `http://localhost:5000/users/${user?.email}`;
  //     await fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAdmin(data.admin);
  //       });
  //   }
  //   isAdmin();
  // }, [user.email]);

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
    // admin,
    isLoading,
    authError,
    userEmailVerified,
    emailVerificationSent,
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

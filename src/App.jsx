import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import NotFound from "./Components/NotFound.jsx";
import AuthProvider from "./Context/AuthProvider/AuthProvider.jsx";
import SecureAuthRoute from "./Pages/Login/SecureAuthRoute.jsx";
import SecureRoute from "./Pages/Login/SecureRoute.jsx";
import SuspenseLoader from "./Components/SuspenseLoader.jsx";

// Lazy-loaded components
const LazyHome = lazy(() => import("./Pages/Home/Home.jsx"));
const LazyAboutUs = lazy(() => import("./Pages/AboutUs/Aboutus.jsx"));
const LazyTestimonial = lazy(() =>
  import("./Pages/Testimonial/Testimonial.jsx")
);
const LazyServices = lazy(() => import("./Pages/Services/Services.jsx"));
const LazyGraphicsDesign = lazy(() =>
  import("./Pages/Services/GraphicsDesign.jsx")
);
const LazyAuth = lazy(() => import("./Pages/Login/Auth.jsx"));
const LazyPassreset = lazy(() => import("./Pages/Login/Passreset.jsx"));
const LazyContactUs = lazy(() => import("./Pages/ContactUs/ContactUs.jsx"));
const LazyDashboard = lazy(() => import("./Pages/Dashboard/Dashboard.jsx"));
const LazyAccountSetting = lazy(() =>
  import("./Pages/Dashboard/AccountSetting.jsx")
);
const LazyMakeProposal = lazy(() =>
  import("./Pages/MakeProposal/MakeProposal.jsx")
);

function App() {
  return (
    <>
      <div className="App">
        <AuthProvider>
          {/* <div className="bg-gray-200">
            <p className=" text-center text-md text-red-600 font-bold">
              * WebSite Under Development *
            </p>
          </div> */}
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyHome />
                </Suspense>
              }
            />
            <Route
              path="/home"
              end
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyHome />
                </Suspense>
              }
            />
            <Route
              path="/aboutus"
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyAboutUs />
                </Suspense>
              }
            />
            {/* <Route path="/test" element={<LazyAboutUs />} /> */}
            <Route
              path="/testimonial"
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyTestimonial />
                </Suspense>
              }
            />
            <Route
              path="services"
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyServices />
                </Suspense>
              }
            />
            <Route
              path="/services/graphicsdesign"
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyGraphicsDesign />
                </Suspense>
              }
            />
            <Route
              path="dashboard"
              element={
                <SecureRoute>
                  <Suspense fallback={<SuspenseLoader />}>
                    <LazyDashboard />
                  </Suspense>
                </SecureRoute>
              }>
              <Route
                path="/dashboard"
                element={
                  <SecureRoute>
                    <Suspense fallback={<SuspenseLoader />}>
                      <LazyAccountSetting />
                    </Suspense>
                  </SecureRoute>
                }
              />
              <Route
                path="accountsetting"
                element={
                  <SecureRoute>
                    <Suspense fallback={<SuspenseLoader />}>
                      <LazyAccountSetting />
                    </Suspense>
                  </SecureRoute>
                }
              />
            </Route>
            <Route
              path="makeproposal"
              element={
                <SecureRoute>
                  <Suspense fallback={<SuspenseLoader />}>
                    <LazyMakeProposal />
                  </Suspense>
                </SecureRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyContactUs />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <SecureAuthRoute>
                  <Suspense fallback={<SuspenseLoader />}>
                    <LazyAuth />
                  </Suspense>
                </SecureAuthRoute>
              }
            />
            <Route
              path="/passreset"
              element={
                <SecureAuthRoute>
                  <Suspense fallback={<SuspenseLoader />}>
                    <LazyPassreset />
                  </Suspense>
                </SecureAuthRoute>
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;

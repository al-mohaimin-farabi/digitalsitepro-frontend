import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import NotFound from "./Components/NotFound.jsx";
import AuthProvider from "./Context/AuthProvider/AuthProvider.jsx";
import SecureAuthRoute from "./Pages/Login/SecureAuthRoute.jsx";
import SecureRoute from "./Pages/Login/SecureRoute.jsx";
import SuspenseLoader from "./Components/SuspenseLoader.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import AdminRoute from "./Pages/Login/AdminRoute.jsx";
import Cursor from "./Components/Cursor.jsx";
import Testing from "./Pages/Testing/Testing.jsx";
import Register from "./Register.jsx";

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
const LazyWebDevelopment = lazy(() =>
  import("./Pages/Services/WebDevelopment.jsx")
);
const LazyVideoEdit = lazy(() => import("./Pages/Services/VideoEditing.jsx"));
const LazyAuth = lazy(() => import("./Pages/Login/Auth.jsx"));
const LazyPassreset = lazy(() => import("./Pages/Login/Passreset.jsx"));
const LazyContactUs = lazy(() => import("./Pages/ContactUs/ContactUs.jsx"));
const LazyDashboard = lazy(() => import("./Pages/Dashboard/Dashboard.jsx"));
const LazyAccountSetting = lazy(() =>
  import("./Pages/Dashboard/AccountSetting.jsx")
);
const LazyApproveTestimonial = lazy(() =>
  import("./Pages/Dashboard/ApproveTestimonial.jsx")
);
const LazyMakeProposal = lazy(() =>
  import("./Pages/MakeProposal/MakeProposal.jsx")
);
const LazyOrderHistory = lazy(() =>
  import("./Pages/Dashboard/OrderHistory.jsx")
);
const LazyProposals = lazy(() =>
  import("./Pages/Dashboard/Proposals.jsx")
);

function App() {
  return (
    <>
      <div className="App">
        <ScrollToTop />
        <Cursor />
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
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyHome />
                </Suspense>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/aboutus"
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyAboutUs />
                </Suspense>
              }
            />
            {/* <Route path="/test" element={<SuspenseLoader />} /> */}
            <Route path="/testing" element={<Testing />} />
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
              path="/services/webdevelopment"
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyWebDevelopment />
                </Suspense>
              }
            />
            <Route
              path="/services/videoedit"
              element={
                <Suspense fallback={<SuspenseLoader />}>
                  <LazyVideoEdit />
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
              <Route
                path="orderhistory"
                element={
                  <SecureRoute>
                    <Suspense fallback={<SuspenseLoader />}>
                      <LazyOrderHistory />
                    </Suspense>
                  </SecureRoute>
                }
              />
              <Route
                path="proposals"
                element={
                  <SecureRoute>
                    <Suspense fallback={<SuspenseLoader />}>
                      <LazyProposals />
                    </Suspense>
                  </SecureRoute>
                }
              />
              <Route
                path="approvetestimonial"
                element={
                  <AdminRoute>
                    <Suspense fallback={<SuspenseLoader />}>
                      <LazyApproveTestimonial />
                    </Suspense>
                  </AdminRoute>
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

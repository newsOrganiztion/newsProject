import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";


const Home = React.lazy(() => import("./components/Home/Home"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const AuthContainer = React.lazy(() =>
  import("./components/Login/AuthContainer")
);
const AdminDash = React.lazy(() =>
  import("./components/AdminDashboard/AdminDashboard")
);
const RegisterPublisher = React.lazy(() =>
  import("./components/RegisterPublisher/RegisterPublisher")
);
const ArticleCreationPage = React.lazy(() =>
  import("./components/ArticleCreationPage/ArticleCreationPage")
);
const ArticleDetailPage = React.lazy(() =>
  import("./components/ArticleDetailPage/ArticleDetailPage")
);
const BookmarkPage = React.lazy(() =>
  import("./components/Bookmark/BookmarkPage")
);
const CategoryPages = React.lazy(() =>
  import("./components/CategoryPages/CategoryPages")
);
const Profile = React.lazy(() =>
  import("./components/UserProfile/UserProfile")
);
const PublisherProfile = React.lazy(() =>
  import("./components/PublisherProfile/PublisherProfile")
);
const About = React.lazy(() => import("./components/AboutUsPage/AboutUsPage"));
const Contact = React.lazy(() =>
  import("./components/ContactUsPage/ContactUsPage")
);
const Footer = React.lazy(() => import("./components/Footer/Footer"));
const PaymentModal = React.lazy(() =>
  import("./components/PaymentPage/Payment")
);

const ConditionalLayout = ({ children }) => {
  const location = useLocation();
  const noNavbarFooterPaths = ["/admin-dashboard", "/auth"];
  const shouldShowNavbarAndFooter = !noNavbarFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <div className="App font-cairo">
      {shouldShowNavbarAndFooter && (
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar />
        </Suspense>
      )}
      {children}
      {shouldShowNavbarAndFooter && (
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
};

function App() {
  return (
    <GoogleOAuthProvider clientId="708338751810-vs4526i07didjadt2vhqgrgu1vnr3ib8.apps.googleusercontent.com">
      <Router>
        <ConditionalLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/BookmarkPage" element={<BookmarkPage />} />
              <Route path="/auth/*" element={<AuthContainer />} />
              <Route path="/category/*" element={<CategoryPages />} />
              <Route path="/article/:id" element={<ArticleDetailPage />} />
              <Route path="/article/submit" element={<ArticleCreationPage />} />
              <Route path="/admin-dashboard/*" element={<AdminDash />} />
              <Route
                path="/register-publisher"
                element={<RegisterPublisher />}
              />
              <Route path="/article-detail" element={<ArticleDetailPage />} />
              <Route path="/category-pages" element={<CategoryPages />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/publisher-profile" element={<PublisherProfile />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/payment" element={<PaymentModal />} />
            </Routes>
          </Suspense>
        </ConditionalLayout>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;

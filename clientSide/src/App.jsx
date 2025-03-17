import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import {
  Home,
  Navbar,
  AuthContainer,
  AdminDash,
  RegisterPublisher,
  ArticleCreationPage,
  ArticleDetailPage,
  BookmarkPage,
  CategoryPages,
  Profile,
  PublisherProfile,
  About,
  Contact,
  Footer,
  PaymentModal
} from "./components";

// Component جديد لعرض Navbar وFooter بشكل مشروط
const ConditionalLayout = ({ children }) => {
  const location = useLocation();

  // قائمة بالمسارات التي لا تحتاج إلى Navbar وFooter
  const noNavbarFooterPaths = ["/admin-dashboard", "/auth"];

  // التحقق مما إذا كان المسار الحالي في القائمة
  const shouldShowNavbarAndFooter = !noNavbarFooterPaths.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="App font-cairo">
      {shouldShowNavbarAndFooter && <Navbar />}
      {children}
      {shouldShowNavbarAndFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <GoogleOAuthProvider clientId="708338751810-vs4526i07didjadt2vhqgrgu1vnr3ib8.apps.googleusercontent.com">
      <Router>
        <ConditionalLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BookmarkPage" element={<BookmarkPage />} />
            <Route path="/auth/*" element={<AuthContainer />} />
            <Route path="/category/*" element={<CategoryPages />} />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
            <Route path="/article/submit" element={<ArticleCreationPage />} />


            <Route path="/admin-dashboard/*" element={<AdminDash />} />


{/* 
            <Route path="/admin-dashboard" element={<AdminDash />} /> */}
            <Route path="/register-publisher" element={<RegisterPublisher />} />
            <Route path="/article-detail" element={<ArticleDetailPage />} />
            <Route path="/category-pages" element={<CategoryPages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/publisher-profile" element={<PublisherProfile />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/payment" element={<PaymentModal />} />
          </Routes>
        </ConditionalLayout>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
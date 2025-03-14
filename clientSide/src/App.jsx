import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './components/Home/Home';
import AuthContainer from './components/Login/AuthContainer';
import CategoryPages from './components/CategoryPages/CategoryPages';
import ArticleDetailPage from './components/ArticleDetailPage/ArticleDetailPage';
import ArticleCreationPage from './components/ArticleCreationPage/ArticleCreationPage';


function App() {
  return (
    <GoogleOAuthProvider clientId="708338751810-vs4526i07didjadt2vhqgrgu1vnr3ib8.apps.googleusercontent.com">
      <Router>
        <div className="App font-cairo">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/*" element={<AuthContainer />} />
            <Route path="/category/*" element={<CategoryPages />} />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
            <Route path="/article/submit" element={<ArticleCreationPage />} />
         
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
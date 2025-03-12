// // // src/App.jsx
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Home from './components/Home/Home';
// // import Login from './components/Login/login';
// // import Register from './components/Login/Registration';
// // import { GoogleOAuthProvider } from '@react-oauth/google'; // استيراد GoogleOAuthProvider


// // function App() {
// //   return (
// //     <GoogleOAuthProvider clientId="708338751810-vs4526i07didjadt2vhqgrgu1vnr3ib8.apps.googleusercontent.com">  {/* هنا يجب وضع Client ID الخاص بك */}

// //     <Router>
// //       <div>
// //         <h1>Welcome to Our App</h1>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //     </GoogleOAuthProvider>

// //   );
// // }

// // export default App;

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Home from './components/Home/Home';
// import AuthContainer from './components/Login/AuthContainer';
// import Dashboard from './components/Home/Home';

// function App() {
//   return (
//     <GoogleOAuthProvider clientId="708338751810-vs4526i07didjadt2vhqgrgu1vnr3ib8.apps.googleusercontent.com">
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/auth/*" element={<AuthContainer />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>
//         </div>
//       </Router>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './components/Home/Home';
import AuthContainer from './components/Login/AuthContainer';
import Dashboard from './components/Home/Home';

function App() {
  return (
    <GoogleOAuthProvider clientId="708338751810-vs4526i07didjadt2vhqgrgu1vnr3ib8.apps.googleusercontent.com">
      <Router>
        <div className="App font-cairo">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/*" element={<AuthContainer />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
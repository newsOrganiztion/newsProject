// // import React, { useState } from 'react';
// // import { GoogleLogin } from '@react-oauth/google';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const Login = () => {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({ email: '', password: '' });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/users/login', formData);
// //       localStorage.setItem('token', response.data.token);
// //       navigate('/dashboard');
// //     } catch (error) {
// //       alert(error.response?.data?.message || 'Login failed');
// //     }
// //   };

// //   const handleGoogleLogin = async (response) => {
// //     try {
// //       const res = await axios.post('http://localhost:5000/api/users/google-login', {
// //         token: response.credential
// //       });
// //       localStorage.setItem('token', res.data.token);
// //       navigate('/dashboard');
// //     } catch (error) {
// //       alert(error.response?.data?.message || 'Google login failed');
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-screen bg-gray-100">
// //       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
// //         <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             className="w-full p-3 border rounded-md"
// //             onChange={handleChange}
// //             required
// //           />
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             className="w-full p-3 border rounded-md"
// //             onChange={handleChange}
// //             required
// //           />
// //           <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md">
// //             Login
// //           </button>
// //         </form>

// //         <div className="mt-4">
// //           <GoogleLogin 
// //             onSuccess={handleGoogleLogin}
// //             onError={() => alert('Google login failed')}
// //             useOneTap
// //           />
// //         </div>

// //         <p className="mt-4 text-center">
// //           Don't have an account? 
// //           <button onClick={() => navigate('/register')} className="text-blue-600 ml-2">
// //             Register
// //           </button>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// // import React, { useState } from 'react';
// // import { GoogleLogin } from '@react-oauth/google';
// // import { motion } from 'framer-motion';
// // import axios from 'axios';

// // const Login = ({ switchForm }) => {
// //   const [formData, setFormData] = useState({ email: '', password: '' });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post('http://localhost:5000/api/users/login', formData);
// //       localStorage.setItem('token', res.data.token);
// //       window.location.href = '/dashboard';
// //     } catch (error) {
// //       alert(error.response?.data?.message || 'Login failed');
// //     }
// //   };

// //   const handleGoogleLogin = async (credentialResponse) => {
// //     try {
// //       const res = await axios.post('http://localhost:5000/api/users/google-login', {
// //         token: credentialResponse.credential
// //       });
// //       localStorage.setItem('token', res.data.token);
// //       window.location.href = '/dashboard';
// //     } catch (error) {
// //       alert(error.response?.data?.message || 'Google login failed');
// //     }
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, x: 50 }}
// //       animate={{ opacity: 1, x: 0 }}
// //       exit={{ opacity: 0, x: -50 }}
// //       className="bg-[#f9f9fb] min-h-screen flex items-center justify-center p-4"
// //     >
// //       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6 border border-[#e5e7eb]">
// //         <div className="text-center">
// //           <h1 className="text-3xl font-bold text-[#383838]">Welcome Back</h1>
// //           <p className="text-[#6b7280] mt-2">Sign in to continue</p>
// //         </div>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             className="w-full p-3 rounded-lg border border-[#e5e7eb] focus:border-[#7585ff] focus:ring-2 focus:ring-[#7585ff]/20"
// //             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// //             required
// //           />
          
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             className="w-full p-3 rounded-lg border border-[#e5e7eb] focus:border-[#7585ff] focus:ring-2 focus:ring-[#7585ff]/20"
// //             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// //             required
// //           />

// //           <motion.button
// //             whileHover={{ scale: 1.02 }}
// //             whileTap={{ scale: 0.98 }}
// //             type="submit"
// //             className="w-full bg-[#51a31d] text-white py-3 rounded-lg font-semibold shadow-lg"
// //           >
// //             Sign In
// //           </motion.button>

// //           <div className="relative">
// //             <div className="absolute inset-0 flex items-center">
// //               <div className="w-full border-t border-[#e5e7eb]"></div>
// //             </div>
// //             <div className="relative flex justify-center">
// //               <span className="px-2 bg-white text-[#6b7280] text-sm">Or</span>
// //             </div>
// //           </div>

// //           <GoogleLogin
// //             onSuccess={handleGoogleLogin}
// //             onError={() => alert('Google login failed')}
// //             shape="pill"
// //             theme="filled_blue"
// //             width="100%"
// //           />

// //           <p className="text-center text-[#6b7280]">
// //             New user?{' '}
// //             <button
// //               onClick={() => switchForm('register')}
// //               className="text-[#7585ff] font-semibold hover:underline"
// //             >
// //               Create Account
// //             </button>
// //           </p>
// //         </form>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default Login;



// import React, { useState } from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import { motion } from 'framer-motion';
// import axios from 'axios';

// const Login = ({ switchForm }) => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
    
//     try {
//       const res = await axios.post('http://localhost:5000/api/users/login', formData);
//       localStorage.setItem('token', res.data.token);
//       window.location.href = '/dashboard';
//     } catch (error) {
//       setError(error.response?.data?.message || 'فشل تسجيل الدخول');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async (credentialResponse) => {
//     setLoading(true);
//     setError('');
    
//     try {
//       const res = await axios.post('http://localhost:5000/api/users/google-login', {
//         token: credentialResponse.credential
//       });
//       localStorage.setItem('token', res.data.token);
//       window.location.href = '/dashboard';
//     } catch (error) {
//       setError(error.response?.data?.message || 'فشل تسجيل الدخول باستخدام جوجل');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -10 }}
//       transition={{ duration: 0.3 }}
//       className="h-full flex flex-col"
//     >
//       <div className="mb-8 text-right">
//         <h2 className="text-3xl font-bold text-gray-800">تسجيل الدخول</h2>
//         <p className="text-gray-500 mt-2">مرحباً بعودتك! يرجى تسجيل الدخول للوصول إلى حسابك</p>
//       </div>

//       {error && (
//         <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-right">
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
//         <div className="text-right">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
//           <input
//             id="email"
//             type="email"
//             placeholder="your@email.com"
//             className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-right"
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//             dir="rtl"
//           />
//         </div>
        
//         <div className="text-right">
//           <div className="flex justify-between items-center mb-1">
//             <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">نسيت كلمة المرور؟</a>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">كلمة المرور</label>
//           </div>
//           <input
//             id="password"
//             type="password"
//             placeholder="••••••••"
//             className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-right"
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//             dir="rtl"
//           />
//         </div>

//         <div className="flex items-center justify-end">
//           <label htmlFor="remember-me" className="mr-2 block text-sm text-gray-700">تذكرني</label>
//           <input
//             id="remember-me"
//             type="checkbox"
//             className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//           />
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium shadow-md hover:bg-indigo-700 transition-colors"
//           disabled={loading}
//         >
//           {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
//         </motion.button>

//         <div className="relative my-6">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center">
//             <span className="px-4 bg-white text-gray-500 text-sm">أو الاستمرار باستخدام</span>
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <GoogleLogin
//             onSuccess={handleGoogleLogin}
//             onError={() => setError('فشل تسجيل الدخول باستخدام جوجل')}
//             shape="pill"
//             theme="filled_blue"
//             width="100%"
//             disabled={loading}
//           />
//         </div>
//       </form>

//       <p className="text-center text-gray-600 mt-8">
//         ليس لديك حساب؟{' '}
//         <button
//           onClick={switchForm}
//           className="text-indigo-600 font-medium hover:text-indigo-800"
//         >
//           إنشاء حساب
//         </button>
//       </p>
//     </motion.div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';
import axios from 'axios';

const Login = ({ switchForm }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', formData);
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      setError(error.response?.data?.message || 'فشل تسجيل الدخول');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    setLoading(true);
    setError('');
    
    try {
      const res = await axios.post('http://localhost:5000/api/users/google-login', {
        token: credentialResponse.credential
      });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      setError(error.response?.data?.message || 'فشل تسجيل الدخول باستخدام جوجل');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col"
    >
      <div className="mb-8 text-right">
        <h2 className="text-3xl font-bold text-[#383838]">تسجيل الدخول</h2>
        <p className="text-gray-500 mt-2">مرحباً بعودتك! يرجى تسجيل الدخول للوصول إلى حسابك</p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-right">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
        <div className="text-right">
          <label htmlFor="email" className="block text-sm font-medium text-[#383838] mb-1">البريد الإلكتروني</label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7585ff] focus:border-[#7585ff] transition-all text-right"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            dir="rtl"
          />
        </div>
        
        <div className="text-right">
          <div className="flex justify-between items-center mb-1">
            <a href="#" className="text-sm text-[#7585ff] hover:text-[#51a31d]">نسيت كلمة المرور؟</a>
            <label htmlFor="password" className="block text-sm font-medium text-[#383838]">كلمة المرور</label>
          </div>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7585ff] focus:border-[#7585ff] transition-all text-right"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            dir="rtl"
          />
        </div>

        <div className="flex items-center justify-end">
          <label htmlFor="remember-me" className="mr-2 block text-sm text-[#383838]">تذكرني</label>
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[#51a31d] border-gray-300 rounded focus:ring-[#7585ff]"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-[#51a31d] text-white py-3 rounded-lg font-medium shadow-md hover:bg-opacity-90 transition-colors"
          disabled={loading}
        >
          {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
        </motion.button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white text-gray-500 text-sm">أو الاستمرار باستخدام</span>
          </div>
        </div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => setError('فشل تسجيل الدخول باستخدام جوجل')}
            shape="pill"
            theme="filled_blue"
            width="100%"
            disabled={loading}
          />
        </div>
      </form>

      <p className="text-center text-gray-600 mt-8">
        ليس لديك حساب؟{' '}
        <button
          onClick={switchForm}
          className="text-[#7585ff] font-medium hover:text-[#51a31d]"
        >
          إنشاء حساب
        </button>
      </p>
    </motion.div>
  );
};

export default Login;
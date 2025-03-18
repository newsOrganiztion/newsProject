// // import React, { useState, useEffect } from 'react';
// // import { Search, Bell, Menu, User, Bookmark } from 'lucide-react';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';



// // const navigation = [
// //   { name: 'ملف الناشر', href: '/publisher-profile', role: 'journalist' },
// //   { name: 'انشر مقال', href: '/article/submit', role: 'journalist' },
// //   { name: 'انضم إلينا', href: '/register-publisher', hideFor: 'journalist' },
// //   { name: 'تواصل معنا', href: '/contact-us' },
// //   { name: 'تسجيل الدخول', href: '/auth' },
// //   { name: 'المقالات ', href: '/category-pages' },
// //   { name: 'عن يقين', href: '/about-us' },
// //   { name: 'الصفحة الرئيسية', href: '/' },
// // ];

// // const Example = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [userRole, setUserRole] = useState(null);
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   useEffect(() => {
// //     const fetchUserRole = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:5000/api/users/get-role", { withCredentials: true });
// //         setUserRole(response.data.role);
// //         setIsAuthenticated(true);
// //       } catch (error) {
// //         setIsAuthenticated(false);
// //       }
// //     };
// //     fetchUserRole();
// //   }, []);

// //   // تصفية عناصر التنقل بناءً على دور المستخدم
// //   const filteredNavigation = navigation.filter(item => 
// //     (!item.hideFor || item.hideFor !== userRole) && item.name !== 'تسجيل الدخول'
// //   );

// //   return (
// //     <div className="w-full shadow-sm bg-white" dir="ltr">
// //       {/* Top Navigation */}
// //       <div className="container mx-auto flex items-center justify-between px-4 py-2 relative mt-10">
// //         {/* Left Section (Login Button) */}
// //         <div className="flex items-center">
// //           {!isAuthenticated &&
// //             navigation.map(
// //               (item) =>
// //                 item.name === "تسجيل الدخول" && (
// //                   <Link key={item.name} to={item.href}>
// //                     <button className="bg-black text-white rounded-full px-5 py-3 mr-4 text-sm hover:bg-[#51a31d]">
// //                       {item.name}
// //                     </button>
// //                   </Link>
// //                 )
// //             )}
// //         </div>

// //         {/* Logo (Centered) */}
// //         <div className="absolute left-1/2 transform -translate-x-1/2">
// //           <img
// //             src="..\public\img\يقين.png"
// //             alt="شعار يقين"
// //             className="h-25 w-50"
// //           />
// //         </div>

// //         {/* Right Section (Icons and Mobile Menu) */}
// //         <div className="flex items-center">
// //           {/* Mobile Menu Button */}
// //           <div className="md:hidden">
// //             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
// //               <Menu size={24} />
// //             </button>
// //           </div>

// //           {/* Icons */}
// //           <div className="flex items-center">
// //             <Link to="/BookmarkPage">
// //               <button className="p-2 hover:text-[#51a31d]">
// //                 <Bookmark size={25} />
// //               </button>
// //             </Link>
// //             <Link to="/profile">
// //               <button className="p-2 hover:text-[#51a31d]">
// //                 <User size={25} />
// //               </button>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom Navigation */}
// //       <div className="container mx-auto border-t border-gray-100 mt-10">
// //         <div className="flex justify-center md:justify-center items-center text-l py-2">
// //           {filteredNavigation.map(
// //             (item) =>
// //               (!item.role || userRole === "journalist") && (
// //                 <Link key={item.name} to={item.href} className="px-4 py-2 hover:text-[#51a31d]">
// //                   {item.name}
// //                 </Link>
// //               )
// //           )}
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <div className="md:hidden bg-white w-full absolute z-10 shadow-md">
// //           <div className="flex flex-col">
// //             {filteredNavigation.map(
// //               (item) =>
// //                 (!item.role || userRole === "journalist") && (
// //                   <Link key={item.name} to={item.href} className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50">
// //                     {item.name}
// //                   </Link>
// //                 )
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Example;


// import React, { useState, useEffect } from 'react';
// import { User, Bookmark, Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const navigation = [
//   { name: 'الصفحة الرئيسية', href: '/' },
//   { name: 'عن يقين', href: '/about-us' },
//   { name: 'المقالات', href: '/category-pages' },
//   { name: 'تواصل معنا', href: '/contact-us' },
//   { name: 'انشر مقال', href: '/article/submit', role: 'journalist' },
//   { name: 'ملف الناشر', href: '/publisher-profile', role: 'journalist' },
//   { name: 'انضم إلينا', href: '/register-publisher', hideFor: 'journalist' },
// ];

// const ResponsiveNavbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [userRole, setUserRole] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/users/get-role", { withCredentials: true });
//         setUserRole(response.data.role);
//         setIsAuthenticated(true);
//       } catch (error) {
//         setIsAuthenticated(false);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   // تصفية عناصر التنقل بناءً على دور المستخدم
//   const filteredNavigation = navigation.filter(item => 
//     (!item.hideFor || item.hideFor !== userRole)
//   );

//   return (
//     <div className="w-full bg-white" dir="rtl">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           {/* القسم الأيمن - الأيقونات */}
//           <div className="flex items-center gap-6">
//             <Link to="/profile" className="block">
//               <User size={28} strokeWidth={2} />
//             </Link>
//             <Link to="/BookmarkPage" className="block">
//               <Bookmark size={28} strokeWidth={2} />
//             </Link>
//           </div>

//           {/* القسم الأوسط - الشعار */}
//           <div className="flex justify-center">
//             <Link to="/">
//               <img 
//                 src="/img/يقين.png" 
//                 alt="شعار يقين" 
//                 className="h-16"
//               />
//             </Link>
//           </div>

//           {/* القسم الأيسر - زر القائمة (موبايل فقط) */}
//           <div className="md:hidden">
//             <button 
//               onClick={() => setIsMenuOpen(!isMenuOpen)} 
//               className="focus:outline-none"
//               aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
//             >
//               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>

//           {/* إخفاء على الموبايل */}
//           <div className="hidden md:block">
//             {/* القسم فارغ لتحقيق التوازن */}
//             <div className="w-28"></div> 
//           </div>
//         </div>
//       </div>

//       {/* القائمة الرئيسية - للشاشات المتوسطة والكبيرة */}
//       <div className="hidden md:block border-t border-gray-100">
//         <div className="container mx-auto">
//           <div className="flex justify-center items-center py-4">
//             {filteredNavigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className="px-4 py-2 hover:text-[#51a31d] transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* القائمة المنسدلة للموبايل */}
//       {isMenuOpen && (
//         <div className="md:hidden fixed inset-0 bg-white z-50 pt-20">
//           <div className="flex flex-col items-center">
//             {filteredNavigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className="w-full text-center py-4 text-lg border-b border-gray-100 hover:bg-gray-50"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             {!isAuthenticated && (
//               <Link
//                 to="/auth"
//                 className="w-full text-center py-4 mt-4"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <button className="bg-black text-white rounded-full px-6 py-3 text-lg hover:bg-[#51a31d] transition-colors">
//                   تسجيل الدخول
//                 </button>
//               </Link>
//             )}
//           </div>
//         </div>
//       )}

//       {/* زر تسجيل الدخول (يظهر فقط للمستخدمين غير المسجلين وعلى الشاشات المتوسطة والكبيرة) */}
//       {!isAuthenticated && (
//         <div className="hidden md:block container mx-auto text-center py-4">
//           <Link to="/auth">
//             <button className="bg-black text-white rounded-full px-6 py-3 hover:bg-[#51a31d] transition-colors">
//               تسجيل الدخول
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResponsiveNavbar;


import React, { useState, useEffect } from 'react';
import { User, Bookmark, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const navigation = [
  { name: 'الصفحة الرئيسية', href: '/' },
  { name: 'عن يقين', href: '/about-us' },
  { name: 'المقالات', href: '/category-pages' },
  { name: 'تواصل معنا', href: '/contact-us' },
  { name: 'انشر مقال', href: '/article/submit', role: 'journalist' },
  { name: 'ملف الناشر', href: '/publisher-profile', role: 'journalist' },
  { name: 'انضم إلينا', href: '/register-publisher', hideFor: 'journalist' },
];

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/get-role", { withCredentials: true });
        setUserRole(response.data.role);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    fetchUserRole();
    
    // تحديد الرابط النشط بناءً على المسار الحالي
    setActiveLink(window.location.pathname);
  }, []);

  // تصفية عناصر التنقل بناءً على دور المستخدم
  const filteredNavigation = navigation.filter(item => 
    (!item.hideFor || item.hideFor !== userRole)
  );

  return (
    <div className="w-full bg-white" dir="rtl">
      {/* CSS للتأثيرات */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .icon-hover {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        
        .icon-hover:hover {
          transform: scale(1.2);
          color: #51a31d;
        }
        
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #51a31d;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: #51a31d;
          transition: width 0.3s ease, left 0.3s ease;
        }
        
        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
          left: 0;
        }
        
        .menu-item {
          transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
        }
        
        .menu-item:hover {
          background-color: #f9f9f9;
          color: #51a31d;
          transform: translateX(-5px);
        }
        
        .login-btn {
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        
        .login-btn:hover {
          background-color: #51a31d;
          transform: scale(1.05);
        }
        
        .mobile-nav-enter {
          opacity: 0;
          transform: translateY(-20px);
        }
        
        .mobile-nav-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.3s, transform 0.3s;
        }
        
        .mobile-nav-exit {
          opacity: 1;
          transform: translateY(0);
        }
        
        .mobile-nav-exit-active {
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.3s, transform 0.3s;
        }
      `}</style>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* القسم الأيمن - الأيقونات */}
          <div className="flex items-center gap-6">
            <Link 
              to="/profile" 
              className="block icon-hover" 
              onClick={() => {
                setActiveLink('/profile');
                document.querySelector('.profile-icon').animate([
                  { transform: 'scale(1)' },
                  { transform: 'scale(1.2)' },
                  { transform: 'scale(1)' }
                ], { duration: 300 });
              }}
            >
              <User className="profile-icon" size={28} strokeWidth={2} />
            </Link>
            <Link 
              to="/BookmarkPage" 
              className="block icon-hover" 
              onClick={() => {
                setActiveLink('/BookmarkPage');
                document.querySelector('.bookmark-icon').animate([
                  { transform: 'scale(1)' },
                  { transform: 'scale(1.2)' },
                  { transform: 'scale(1)' }
                ], { duration: 300 });
              }}
            >
              <Bookmark className="bookmark-icon" size={28} strokeWidth={2} />
            </Link>
          </div>

          {/* القسم الأوسط - الشعار */}
          <div className="flex justify-center">
            <Link 
              to="/" 
              className="block transition-transform duration-300 hover:scale-105"
              onClick={() => setActiveLink('/')}
            >
              <img 
                src="/img/يقين.png" 
                alt="شعار يقين" 
                className="h-16"
              />
            </Link>
          </div>

          {/* القسم الأيسر - زر القائمة (موبايل فقط) */}
          <div className="md:hidden">
            <button 
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                const menuBtn = document.querySelector('.menu-button');
                menuBtn.animate([
                  { transform: 'rotate(0deg)' },
                  { transform: 'rotate(90deg)' },
                  { transform: 'rotate(0deg)' }
                ], { duration: 300 });
              }} 
              className="focus:outline-none icon-hover menu-button"
              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* إخفاء على الموبايل */}
          <div className="hidden md:block">
            {/* القسم فارغ لتحقيق التوازن */}
            <div className="w-28"></div> 
          </div>
        </div>
      </div>

      {/* القائمة الرئيسية - للشاشات المتوسطة والكبيرة */}
      <div className="hidden md:block border-t border-gray-100">
        <div className="container mx-auto">
          <div className="flex justify-center items-center py-4">
            {filteredNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 nav-link ${activeLink === item.href ? 'active text-[#51a31d]' : ''}`}
                onClick={() => setActiveLink(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* القائمة المنسدلة للموبايل */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 mobile-nav-enter-active">
          <div className="flex flex-col items-center">
            {filteredNavigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`w-full text-center py-4 text-lg border-b border-gray-100 menu-item ${activeLink === item.href ? 'text-[#51a31d]' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  setActiveLink(item.href);
                  setTimeout(() => setIsMenuOpen(false), 300);
                }}
              >
                {item.name}
              </Link>
            ))}
            {!isAuthenticated && (
              <Link
                to="/auth"
                className="w-full text-center py-4 mt-4"
                onClick={() => {
                  setActiveLink('/auth');
                  setTimeout(() => setIsMenuOpen(false), 300);
                }}
              >
                <button className="bg-black text-white rounded-full px-6 py-3 text-lg login-btn">
                  تسجيل الدخول
                </button>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* زر تسجيل الدخول (يظهر فقط للمستخدمين غير المسجلين وعلى الشاشات المتوسطة والكبيرة) */}
      {!isAuthenticated && (
        <div className="hidden md:block container mx-auto text-center py-4">
          <Link to="/auth" onClick={() => setActiveLink('/auth')}>
            <button className="bg-black text-white rounded-full px-6 py-3 login-btn">
              تسجيل الدخول
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ResponsiveNavbar;
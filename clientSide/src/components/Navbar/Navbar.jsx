import React, { useState, useEffect } from "react";
import { User, Bookmark, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const navigation = [
  { name: "الصفحة الرئيسية", href: "/" },
  { name: "عن يقين", href: "/about-us" },
  { name: "المقالات", href: "/category-pages" },
  { name: "تواصل معنا", href: "/contact-us" },
  { name: "انشر مقال", href: "/article/submit", role: "journalist" },
  { name: "ملف الناشر", href: "/publisher-profile", role: "journalist" },
  { name: "انضم إلينا", href: "/register-publisher", hideFor: "journalist" },
];

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/users/get-role",
          { withCredentials: true }
        );
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

  // تصفية عناصر التنقل بناءً على دور المستخدم وحالة تسجيل الدخول
  const filteredNavigation = navigation.filter((item) => {
    if (!isAuthenticated) {
      return (
        item.name === "الصفحة الرئيسية" ||
        item.name === "عن يقين" ||
        item.name === "المقالات" ||
        item.name === "تواصل معنا"
      );
    } else if (userRole === "reader") {
      return (
        item.name === "الصفحة الرئيسية" ||
        item.name === "عن يقين" ||
        item.name === "المقالات" ||
        item.name === "تواصل معنا" ||
        item.name === "انضم إلينا"
      );
    } else if (userRole === "journalist") {
      return true; // يعرض كل العناصر
    }
    return false;
  });

  return (
    <div className="w-full bg-white" dir="rtl">
      {/* CSS للتأثيرات */}
      <style jsx>{`
        /* التأثيرات الخاصة بـ CSS */
        .login-btn {
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .login-btn:hover {
          background-color: #51a31d;
          transform: scale(1.05);
        }

        /* التأثيرات على الأيقونات */
        .icon-hover:hover {
          transform: scale(1.2);
          color: #51a31d;
        }

        /* تغيير موقع زر تسجيل الدخول */
        .login-btn-container {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 1000;
        }
      `}</style>

      <div className="container mx-auto px-4 py-4 relative">
        {/* زر تسجيل الدخول في أعلى الصفحة على اليسار */}
        {!isAuthenticated && (
          <div className="login-btn-container">
            <Link to="/auth" onClick={() => setActiveLink("/auth")}>
              <button className="bg-black text-white rounded-full px-6 py-3 text-lg login-btn">
                تسجيل الدخول
              </button>
            </Link>
          </div>
        )}

        <div className="flex justify-between items-center">
          {/* القسم الأيمن - الأيقونات */}
          <div className="flex items-center gap-6">
            <Link
              to="/profile"
              className="block icon-hover"
              onClick={() => {
                setActiveLink("/profile");
                document
                  .querySelector(".profile-icon")
                  .animate(
                    [
                      { transform: "scale(1)" },
                      { transform: "scale(1.2)" },
                      { transform: "scale(1)" },
                    ],
                    { duration: 300 }
                  );
              }}
            >
              <User className="profile-icon" size={28} strokeWidth={2} />
            </Link>
            <Link
              to="/BookmarkPage"
              className="block icon-hover"
              onClick={() => {
                setActiveLink("/BookmarkPage");
                document
                  .querySelector(".bookmark-icon")
                  .animate(
                    [
                      { transform: "scale(1)" },
                      { transform: "scale(1.2)" },
                      { transform: "scale(1)" },
                    ],
                    { duration: 300 }
                  );
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
              onClick={() => setActiveLink("/")}
            >
              <img src="/img/يقين.png" alt="شعار يقين" className="h-16" />
            </Link>
          </div>

          {/* القسم الأيسر - زر القائمة (موبايل فقط) */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                const menuBtn = document.querySelector(".menu-button");
                menuBtn.animate(
                  [
                    { transform: "rotate(0deg)" },
                    { transform: "rotate(90deg)" },
                    { transform: "rotate(0deg)" },
                  ],
                  { duration: 300 }
                );
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
                className={`px-4 py-2 nav-link ${
                  activeLink === item.href ? "active text-[#51a31d]" : ""
                }`}
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
                className={`w-full text-center py-4 text-lg border-b border-gray-100 menu-item ${
                  activeLink === item.href ? "text-[#51a31d]" : ""
                }`}
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
                  setActiveLink("/auth");
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
    </div>
  );
};

export default ResponsiveNavbar;
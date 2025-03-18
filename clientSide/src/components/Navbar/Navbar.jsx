import React, { useState, useEffect } from 'react';
import { Search, Bell, Menu, User, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const navigation = [
  { name: 'ملف الناشر', href: '/publisher-profile', role: 'journalist' },
  { name: 'انشر مقال', href: '/article/submit', role: 'journalist' },
  { name: 'انضم إلينا', href: '/register-publisher', hideFor: 'journalist' },
  { name: 'تواصل معنا', href: '/contact-us' },
  { name: 'تسجيل الدخول', href: '/auth' },
  { name: 'المقالات ', href: '/category-pages' },
  { name: 'عن يقين', href: '/about-us' },
  { name: 'الصفحة الرئيسية', href: '/' },
];

const Example = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
  }, []);

  // تصفية عناصر التنقل بناءً على دور المستخدم
  const filteredNavigation = navigation.filter(item => 
    (!item.hideFor || item.hideFor !== userRole) && item.name !== 'تسجيل الدخول'
  );

  return (
    <div className="w-full shadow-sm bg-white" dir="ltr">
      {/* Top Navigation */}
      <div className="container mx-auto flex items-center justify-between px-4 py-2 relative mt-10">
        {/* Left Section (Login Button) */}
        <div className="flex items-center">
          {!isAuthenticated &&
            navigation.map(
              (item) =>
                item.name === "تسجيل الدخول" && (
                  <Link key={item.name} to={item.href}>
                    <button className="bg-black text-white rounded-full px-5 py-3 mr-4 text-sm hover:bg-[#51a31d]">
                      {item.name}
                    </button>
                  </Link>
                )
            )}
        </div>

        {/* Logo (Centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="..\public\img\يقين.png"
            alt="شعار يقين"
            className="h-25 w-50"
          />
        </div>

        {/* Right Section (Icons and Mobile Menu) */}
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <Menu size={24} />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center">
            <Link to="/BookmarkPage">
              <button className="p-2 hover:text-[#51a31d]">
                <Bookmark size={25} />
              </button>
            </Link>
            <Link to="/profile">
              <button className="p-2 hover:text-[#51a31d]">
                <User size={25} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="container mx-auto border-t border-gray-100 mt-10">
        <div className="flex justify-center md:justify-center items-center text-l py-2">
          {filteredNavigation.map(
            (item) =>
              (!item.role || userRole === "journalist") && (
                <Link key={item.name} to={item.href} className="px-4 py-2 hover:text-[#51a31d]">
                  {item.name}
                </Link>
              )
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute z-10 shadow-md">
          <div className="flex flex-col">
            {filteredNavigation.map(
              (item) =>
                (!item.role || userRole === "journalist") && (
                  <Link key={item.name} to={item.href} className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50">
                    {item.name}
                  </Link>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Example;

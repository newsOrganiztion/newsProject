import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaUserEdit, FaUsers, FaNewspaper, FaComments, FaChartLine } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();

 const menuItems = [
  { name: "Dashboard", label: "الرئيسية", icon: FaTachometerAlt, path: "/admin-dashboard" }, // المسار الرئيسي
  { name: "ManageJournalists", label: "إدارة الصحفيين", icon: FaUserEdit, path: "/admin-dashboard/manage-journalists" },
  { name: "ManageUsers", label: "إدارة المستخدمين", icon: FaUsers, path: "/admin-dashboard/manage-users" },
  { name: "ArticleManagement", label: "إدارة المقالات", icon: FaNewspaper, path: "/admin-dashboard/article-management" },
  { name: "CommentsReports", label: "التعليقات والتبليغات", icon: FaComments, path: "/admin-dashboard/comments-reports" },
  { name: "Analytics", label: "تحليلات الموقع", icon: FaChartLine, path: "/admin-dashboard/analytics" },
];

 const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/users/logout",
        {},
        { withCredentials: true }
      );
      window.location.href = "/auth";
    } catch (error) {
      toast.error("فشل في تسجيل الخروج");
    }
  };

  return (
    <div className="w-64 h-screen bg-[#f9f9fb] text-gray-800 flex flex-col p-4 shadow-lg" dir="rtl">
      <div className="mb-6 flex flex-col items-center border-b border-gray-200 pb-4">
        <span className="text-xl font-bold text-[#51a31d]">اليقين</span>
        {/* <span className="text-sm text-gray-500">{adminName}</span> */}
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                className={`flex items-center gap-3 p-3 rounded-lg text-right w-full transition-all duration-200 border-r-4 ${
                  active === item.name 
                    ? "bg-white text-[#51a31d] border-r-[#51a31d] shadow-md" 
                    : "border-r-transparent hover:bg-white hover:text-[#7585ff] hover:shadow-md"
                }`}
                onClick={() => {
                  setActive(item.name);
                  navigate(item.path);
                }}
              >
                <span className="flex-1">{item.label}</span>
                <item.icon className={`w-5 h-5 ${active === item.name ? "text-[#51a31d]" : "text-gray-600"}`} />
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto pt-4 border-t border-gray-200">
        <div className="flex items-center justify-end gap-3 p-3">
        <button
                  onClick={handleLogout}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  تسجيل الخروج
                </button>
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
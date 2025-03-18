import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Login from "./login";
import Register from "./Registration";

const AuthContainer = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const switchForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#f9f9fb] to-[#f0f0f5] p-4 font-tajawal">
      <div className="w-full max-w-5xl flex rounded-3xl shadow-2xl overflow-hidden">
        {/* الجانب الأيسر */}
        <div className="hidden md:flex flex-col w-2/5 bg-[#51a31d] text-white p-12 justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              مرحباً بك في منصتنا الإخبارية
            </h1>
            <p className="text-[#f9f9fb] mb-8">
              انضم إلى مجتمعنا الذي يثق في أحدث الأخبار والمقالات التي نقدمها
              لتلبية اهتماماته اليومية.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-[#418c1b] p-2 rounded-full ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p>أخبار موثوقة ومحدثة</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-[#418c1b] p-2 rounded-full ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <p>تجربة قراءة سلسة ومريحة</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-[#418c1b] p-2 rounded-full ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p>محتوى متنوع ومنوع</p>
            </div>
          </div>

          <div className="text-[#f9f9fb] text-sm text-right">
            © 2025 منصتك الإخبارية. جميع الحقوق محفوظة.
          </div>
        </div>

        {/* الجانب الأيمن */}
        <div className="w-full md:w-3/5 bg-[#f9f9fb] p-8 md:p-12 rtl">
          <AnimatePresence mode="wait">
            {currentForm === "login" ? (
              <Login key="login" switchForm={() => switchForm("register")} />
            ) : (
              <Register key="register" switchForm={() => switchForm("login")} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;

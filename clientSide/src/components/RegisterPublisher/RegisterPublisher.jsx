import React, { useState } from "react";
import Swal from "sweetalert2"; 

const AddJournalistForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    description: "",
    proofPicture: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      proofPicture: e.target.files[0]?.name || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/journalist/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          "Failed to connect to the server or journalist not added"
        );
      }

      const result = await response.json();

      // Show success alert using SweetAlert2
      Swal.fire({
        icon: "success",
        title: "تم تقديم الطلب بنجاح!",
        text: result.message,
        confirmButtonText: "موافق",
      });
    } catch (error) {
      console.error(error);

      // Show error alert using SweetAlert2
      Swal.fire({
        icon: "error",
        title: "حدث خطأ",
        text: "حدث خطأ أثناء إرسال البيانات. يرجى المحاولة لاحقًا.",
        confirmButtonText: "موافق",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-5xl p-6 bg-white shadow-xl rounded-xl">
        <div className="mb-6 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#51a31d] to-[#7585ff] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">كن صحفيًا</h2>
          <p className="mt-2 text-gray-600">انضم إلى فريقنا الصحفي المتميز</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                الاسم:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 mt-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7585ff] focus:border-transparent"
                placeholder="ادخل اسمك الكامل"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                البريد الإلكتروني:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 mt-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7585ff] focus:border-transparent"
                placeholder="example@domain.com"
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                الوصف المهني:
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-3 mt-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7585ff] focus:border-transparent"
                placeholder="اكتب نبذة عن خبرتك وخلفيتك الصحفية"
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="proofPicture"
                className="block text-sm font-medium text-gray-700"
              >
                إثبات الهوية الصحفية:
              </label>
              <div className="mt-1 flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      {formData.proofPicture
                        ? formData.proofPicture
                        : "اضغط لرفع صورة أو اسحب الملف هنا"}
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG or PDF (MAX. 2MB)
                    </p>
                  </div>
                  <input
                    type="file"
                    id="proofPicture"
                    name="proofPicture"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-[#51a31d] to-[#7585ff] rounded-lg shadow-md hover:from-[#469119] hover:to-[#6a77e8] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#51a31d]"
            >
              تقديم الطلب
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJournalistForm;

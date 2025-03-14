import React, { useState } from "react";
import Swal from "sweetalert2"; 

const AddJournalistForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    description: "",
    proofPicture: "",
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({ ...prevData, proofPicture: file.name }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/journalist/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request. Please try again.");
      }

      const result = await response.json();

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "تم تقديم الطلب بنجاح!",
        text: result.message,
        confirmButtonText: "موافق",
      });
    } catch (error) {
      // Show error alert
      Swal.fire({
        icon: "error",
        title: "حدث خطأ",
        text: "تعذر إرسال البيانات. يرجى المحاولة لاحقًا.",
        confirmButtonText: "موافق",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-5xl p-6 bg-white shadow-xl rounded-xl">
        {/* Header Section */}
        <div className="text-center mb-6">
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

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Input */}
            <InputField
              label="الاسم:"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="ادخل اسمك الكامل"
              required
            />

            {/* Email Input */}
            <InputField
              label="البريد الإلكتروني:"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@domain.com"
              required
            />

            {/* Description Textarea */}
            <TextAreaField
              label="الوصف المهني:"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="اكتب نبذة عن خبرتك وخلفيتك الصحفية"
              required
            />

            {/* File Upload */}
            <FileUploadField
              label="إثبات الهوية الصحفية:"
              fileName={formData.proofPicture}
              onChange={handleFileChange}
            />
          </div>

          {/* Submit Button */}
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

// Reusable Input Field Component
const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 mt-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7585ff] focus:border-transparent"
      placeholder={placeholder}
    />
  </div>
);

// Reusable Textarea Field Component
const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div className="col-span-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows="3"
      className="w-full px-4 py-3 mt-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7585ff] focus:border-transparent"
      placeholder={placeholder}
    />
  </div>
);

// Reusable File Upload Component
const FileUploadField = ({ label, fileName, onChange }) => (
  <div className="col-span-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-1 flex items-center justify-center w-full">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
        <p className="mb-2 text-sm text-gray-500">
          {fileName || "اضغط لرفع صورة أو اسحب الملف هنا"}
        </p>
        <input
          type="file"
          name="proofPicture"
          onChange={onChange}
          className="hidden"
        />
      </label>
    </div>
  </div>
);

export default AddJournalistForm;

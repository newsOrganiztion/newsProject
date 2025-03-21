import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // استيراد مكتبة toast
import "react-toastify/dist/ReactToastify.css"; // استيراد ملفات الأنماط الخاصة بالـ toast
import PaymentComponent from "../PaymentPage/Payment";
import Swal from 'sweetalert2';

export default function ArticleDetailPage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [email, setEmail] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  const [liked, setLiked] = useState(false);
  const [shareCount, setShareCount] = useState(14);
  const [commentsCount, setCommentsCount] = useState(8);
  const [userId, setUserId] = useState(null); // State to store userId

  useEffect(() => {
    fetchComments();
    fetchArticle();
    getUserId();
  }, [id]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/comments/${id}`);
      const approvedComments = response.data;
      setComments(approvedComments);
      setCommentsCount(approvedComments.length);
    } catch (error) {
      console.error("❌ Error fetching comments:", error);
    }
  };

  const fetchArticle = async () => {
    try {
      const articleResponse = await axios.get(`http://localhost:5000/api/articles/${id}`);
      setArticle(articleResponse.data);
      setLikeCount(articleResponse.data.likes || 0);
      setShareCount(articleResponse.data.shares || 0);
    } catch (error) {
      console.error("❌ Error fetching article:", error);
    } finally {
      setLoading(false);
    }
  };

  const getUserId = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users/get-user", {
        withCredentials: true,
      });
      if (res.data?.userId) {
        console.log("✅ User ID received:", res.data.userId);
        setUserId(res.data.userId);
        setEmail(res.data.email);
      } else {
        console.log("⚠ No user ID found (user might not be logged in)");
      }
    } catch (error) {
      console.warn("❌ Error fetching user (probably not logged in):", error.response?.data || error.message);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    try {
      if (!userId) {
        console.error("User ID is not available.");
        return;
      }
      await axios.post(`http://localhost:5000/api/comments/${id}`, {
        userId: userId,
        content: comment,
      });
      toast.success("تم إرسال تعليقك."); 
      setComment("");
      fetchComments();
    } catch (error) {
      console.error("❌ خطأ أثناء إضافة التعليق:", error.response ? error.response.data : error.message);
      toast.error("حدث خطأ أثناء إضافة التعليق."); 
    }
  };

  const handleLike = async () => {
    if (liked) return;
    try {
      const response = await axios.post(`http://localhost:5000/api/articles/${id}/like`);
      if (response.data.likes !== undefined) {
        setLikeCount(response.data.likes);
      }
      setLiked(true);
    } catch (error) {
      console.error("خطأ أثناء تسجيل الإعجاب:", error);
    }
  };

  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = article?.title || "";
    const text = article?.content ? article.content.substring(0, 100) : "";

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`,
          "_blank"
        );
        break;
        default:
        break;
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/articles/${id}/share`);
      if (response.data.shares !== undefined) {
        setShareCount(response.data.shares);
      }
    } catch (error) {
      console.error("Error updating share count:", error);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success(`ارجوا اكمال عملية الدفع لارسال طلب الاشتراك: ${email}`); 
    setEmail("");
  };

  if (loading) {
    return <div className="text-center p-10 text-xl">جارٍ تحميل المقال...</div>;
  }
  if (!article) {
    return <div className="text-center p-10 text-red-500 text-xl">المقال غير موجود</div>;
  }

  const handleReportComment = async (commentId) => {
    const { value: reason } = await Swal.fire({
      title: 'أدخل سبب البلاغ',
      input: 'textarea',
      inputLabel: 'سبب البلاغ',
      inputPlaceholder: 'اكتب سبب البلاغ هنا...',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'يجب إدخال سبب البلاغ';
        }
      }
    });

    if (!reason) {
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5000/api/comments/report/${commentId}`,
        { reason }
      );

      if (response.status === 200) {
        toast.success("تم إرسال البلاغ بنجاح. سيتم مراجعته من قبل المسؤول.");

        // إزالة التعليق من القائمة
        setComments((prevComments) => prevComments.filter(comment => comment._id !== commentId));
      }
    } catch (error) {
      toast.error("حدث خطأ أثناء الإبلاغ عن التعليق.");
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl" dir="rtl">
      {/* Category bar */}
      <div className="mb-4 text-sm text-gray-500 flex gap-2">
        <span>مقالات</span>
        <span>|</span>
        <span>{article.category || "غير محدد"}</span>
      </div>

      {/* Article Title */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800 leading-tight">{article.title}</h1>
      </div>

      {/* Author and Date Information */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-gray-500">
          <span className="flex items-center ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {article.author || "كاتب مجهول"}
          </span>
          <span className="mx-2">|</span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Date(article.publishedDate).toLocaleDateString() || "غير معروف"}
          </span>
        </div>
      </div>

      {/* Article Image */}
      <div className="mb-6">
        <img
          src={`http://localhost:5000/${article.featuredImage}`}
          alt={article.title}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Engagement Stats Bar */}
      <div className="flex items-center justify-between mb-8 py-3 px-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="text-gray-600">{article.views} مشاهدة</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span className="text-gray-600">{commentsCount} تعليق</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span className="text-gray-600">{shareCount} مشاركة</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className={`flex items-center ${liked ? 'text-pink-600' : 'text-gray-600'} hover:text-pink-600`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1"
              fill={liked ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={liked ? 0 : 2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{likeCount}</span>
          </button>
          <button
            onClick={() => handleShare('facebook')}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </button>

          <button
            onClick={() => handleShare('linkedin')}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="text-gray-700 leading-relaxed space-y-6 mb-8">
        <p className="text-lg">{article.paragraph1}</p>
        <p className="text-lg">{article.paragraph2}</p>
        {article.paragraph3Title && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{article.paragraph3Title}</h2>
            <p className="text-lg">{article.paragraph3}</p>
          </div>
        )}
        {article.paragraph4Title && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{article.paragraph4Title}</h2>
            <p className="text-lg">{article.paragraph4}</p>
          </div>
        )}
      </div>

      {/* Writer's Card */}
      <div className="bg-white p-6 mb-8 flex flex-col md:flex-row items-start md:items-center border-b border-[#51a31d]">
        <div className="mb-4 md:mb-0 md:ml-6 grayscale filter">
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-pen-ai-generated_23-2150695569.jpg?uid=R181373975&ga=GA1.1.1709772547.1733645509&semt=ais_hybrid"
            alt={article.author || "الكاتب"}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl text-gray-800 mb-1">{article.author}</h3>
          <p className="text-sm text-gray-500 mb-2">{article.authorDescription}</p>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 bottom-0 right-0 w-1 bg-[#51a31d]"></div>
        <div className="flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-right">
              اشترك في النشرة البريدية الاسبوعية : <span>{article.category || "غير محدد"}</span>
            </h3>
            <p className="text-gray-600 text-sm text-right">
              اشترك الآن في يقين نيوز وكن على اطلاع دائم بأهم الأخبار والمستجدات من المنطقة والعالم.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="البريد الإلكتروني"
              className="flex-1 border-2 border-gray-300 rounded-full px-4 py-2 text-right bg-white"
              required
            />
            <button
              className="bg-black text-white font-semibold px-6 py-2 rounded-full mt-4 hover:bg-gray-800 transition-colors"
              onClick={() => setShowPayment(true)}
            >
              اشترك الآن
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3 text-right">
            عند قيامكم بالتسجيل فهذا يعني موافقتكم على{" "}
            <a href="#" className="text-[#51a31d] hover:underline">
              سياسة الخصوصية للشبكة
            </a>
          </p>
          <div className="mt-2 text-xs text-gray-500 text-right">محمي بواسطة reCAPTCHA</div>
          {showPayment && (
            <PaymentComponent
              email={email}
              onClose={() => setShowPayment(false)}
            />
          )}
        </div>
      </div>

      {/* Comment Form Section */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">أضف تعليقًا</h3>
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border border-gray-300 rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="اكتب تعليقك هنا..."
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            نشر التعليق
          </button>
        </form>
      </div>

      {/* Comments Section */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <span>التعليقات</span>
          <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mr-2">{comments.length}</span>
        </h3>
       
  {comments.length > 0 ? (
  <div className="space-y-6">
    {comments.map((comment) => (
      <div key={comment._id} className="border-b border-gray-100 pb-6">
        <div className="flex items-start mb-2">
          <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center ml-3">
            {comment.userId?.name ? comment.userId.name.charAt(0) : "?"}
          </div>
          <div>
            <h4 className="font-bold">{comment.userId?.name || "مجهول"}</h4>
            <p className="text-gray-500 text-sm">
              {new Date(comment.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className="text-gray-700 mr-13">{comment.content}</p>
        {/* لا نعرض النص هنا بعد الآن */}
        <button
          onClick={() => handleReportComment(comment._id)}
          className="text-red-600 hover:text-red-800 text-sm mt-2"
        >
          الإبلاغ عن التعليق
        </button>
      </div>
    ))}
  </div>
) : (
  <p className="text-gray-500 text-center py-6">لا توجد تعليقات حتى الآن. كن أول من يعلق!</p>
)}

      </div>

      {/* إضافة مكون ToastContainer */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true} // لدعم اللغة العربية
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
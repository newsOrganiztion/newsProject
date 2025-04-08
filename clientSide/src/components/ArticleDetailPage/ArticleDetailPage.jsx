import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [userId, setUserId] = useState(null);

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
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }
  if (!article) {
    return (
      <div className="text-center p-20">
        <h2 className="text-2xl font-bold text-red-500 mb-4">المقال غير موجود</h2>
        <p className="text-gray-600">قد يكون المقال قد تم حذفه أو أن الرابط غير صحيح</p>
      </div>
    );
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
        setComments((prevComments) => prevComments.filter(comment => comment._id !== commentId));
      }
    } catch (error) {
      toast.error("حدث خطأ أثناء الإبلاغ عن التعليق.");
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir="rtl">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-600">
              الرئيسية
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-green-600 md:ml-2">المقالات</a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{article.category || "غير محدد"}</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">{article.title}</h1>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center text-gray-600">
            <div className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{article.author || "كاتب مجهول"}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{new Date(article.publishedDate).toLocaleDateString() || "غير معروف"}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center ${liked ? 'text-red-500' : 'text-gray-600'} hover:text-red-500 transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={liked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={liked ? 0 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="mr-1">{likeCount}</span>
            </button>
            
            <button onClick={() => handleShare('facebook')} className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button onClick={() => handleShare('linkedin')} className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
        <img
          src={`http://localhost:5000/${article.featuredImage}`}
          alt={article.title}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

      {/* Article Stats */}
      <div className="flex flex-wrap items-center justify-between mb-8 py-4 px-6 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>{article.views} مشاهدة</span>
          </div>
          <div className="flex items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span>{commentsCount} تعليق</span>
          </div>
          <div className="flex items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>{shareCount} مشاركة</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none mb-12">
        <p className="text-gray-700 leading-relaxed mb-6">{article.paragraph1}</p>
        <p className="text-gray-700 leading-relaxed mb-6">{article.paragraph2}</p>
        
        {article.paragraph3Title && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{article.paragraph3Title}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{article.paragraph3}</p>
          </>
        )}
        
        {article.paragraph4Title && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{article.paragraph4Title}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{article.paragraph4}</p>
          </>
        )}
      </article>

      {/* Author Box */}
      <div className="bg-white p-6 mb-12 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-start gap-6">
        <div className="w-20 h-20 rounded-full overflow-hidden border-[#51a31d]">
        <div className="grayscale filter">
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-pen-ai-generated_23-2150695569.jpg"
            alt={article.author || "الكاتب"}
            className="w-full h-full object-cover"
          />
        </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{article.author}</h3>
          <p className="text-gray-600 mb-4">{article.authorDescription}</p>
        </div>
      </div>

      {/* Newsletter Subscription Section*/}
      <div className="bg-gray-100 rounded-lg p-6 mb-12 relative overflow-hidden">
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

      {/* Comments Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            التعليقات
            <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mr-2">{comments.length}</span>
          </h3>
        </div>
        
        {comments.length > 0 ? (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment._id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center ml-3">
                    {comment.userId?.name ? comment.userId.name.charAt(0) : "?"}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-gray-900">{comment.userId?.name || "مجهول"}</h4>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-2">{comment.content}</p>
                    <button
                      onClick={() => handleReportComment(comment._id)}
                      className="text-red-600 hover:text-red-800 text-sm mt-2 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      الإبلاغ عن التعليق
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <h4 className="text-lg font-medium text-gray-700 mb-2">لا توجد تعليقات حتى الآن</h4>
            <p className="text-gray-500">كن أول من يعلق على هذا المقال</p>
          </div>
        )}
      </div>

      {/* Add Comment Form */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6">أضف تعليقًا</h3>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-4 h-32 focus:outline-none focus:ring-2 focus:ring-[#51a31d] focus:border-transparent"
            placeholder="اكتب تعليقك هنا..."
            required
          ></textarea>
          <div className="mt-4">
          <button
       type="submit"
       className="bg-[#51a31d] text-white font-medium py-2 px-6 rounded-full transition-colors hover:bg-[#428017]"
     >
     نشر التعليق
       </button>
          </div>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
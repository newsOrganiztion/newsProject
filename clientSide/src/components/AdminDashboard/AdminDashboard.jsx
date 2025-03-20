import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Analytics from './Analytics';
import ArticleManagement from './ArticleManagement';
import ManageJournalists from './ManageJournalists';
import ManageUsers from './ManageUsers';
import CommentsReports from './Comments&Reports';

const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* السايد بار */}
      <Sidebar />

      {/* المحتوى الرئيسي */}
      <div className="flex-1 p-4">
        <Routes>
          <Route path="analytics" element={<Analytics />} />
          <Route path="article-management" element={<ArticleManagement />} />
          <Route path="manage-journalists" element={<ManageJournalists />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="comments-reports" element={<CommentsReports />} />
          <Route index element={<DashboardHome />} /> {/* الصفحة الرئيسية */}
        </Routes>
      </div>
    </div>
  );
};

// كومبوننت للصفحة الرئيسية (اختياري)
const DashboardHome = () => {
  return (
    <div>
    <Analytics/>
    </div>
  );
};

export default AdminDashboard;
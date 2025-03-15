import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/users/users');  
      console.log('Response from API:', response.data.users);
      setUsers(response.data.users);
      setUserCount(response.data.userCount);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      alert('User deleted successfully!');
      fetchUsers();  // إعادة جلب البيانات بعد الحذف
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>

      <h2>Total Users: {userCount}</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <li key={user._id}>
                <div>
                  <img src={user.profilePicture} alt={user.name} width={50} height={50} />
                  <strong>{user.name}</strong> ({user.role})
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p> {/* بيانات إضافية إذا كانت موجودة */}
                  <button onClick={() => deleteUser(user._id)}>Delete</button>
                </div>
              </li>
            ))
          ) : (
            <p>No users found</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default ManageUsers;

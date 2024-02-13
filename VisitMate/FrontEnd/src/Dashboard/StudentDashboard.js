import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from '../Slice/userSlice';

const StudentDashboard = () => {
  const userData = useSelector(selectUserData);

  return (
    <div id="wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Dashboard</span>
          <div className="navbar-nav ms-auto">
            <span className="nav-item nav-link">Welcome, {userData?.userData?.name}</span>
            <span className="nav-item nav-link">Department: {userData?.userData?.department}</span>
            <span className="nav-item nav-link">Email: {userData?.userData?.email}</span>
            <span className="nav-item nav-link">Phone: {userData?.userData?.Phno}</span>
            <span className="nav-item nav-link">Address: {userData?.userData?.address}</span>
            <span className="nav-item nav-link">Gender: {userData?.userData?.gender}</span>
            <span className="nav-item nav-link">Status: {userData?.userData?.status}</span>
            {/* Add more information as needed */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StudentDashboard;

// AdminDashboard.js
import React from 'react';

const AdminDashboard = () => {
  return (
    <div id="wrapper">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Admin Dashboard</span>
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#">Logout</a>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <nav id="sidebar" className="bg-secondary">
        <div className="sidebar-header">
          <h3>Admin Options</h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a href="#">Manage Students</a>
          </li>
          <li>
            <a href="#">Schedule Industry Visit</a>
          </li>
          <li>
            <a href="#">Modify Upcoming Visit</a>
          </li>
        </ul>
      </nav>

      {/* Dashboard */}
      <div id="content" className="container-fluid">
        <h1>Welcome to the Admin Dashboard!</h1>
        <p>Here you can manage students, schedule industry visits, and modify upcoming visits.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;

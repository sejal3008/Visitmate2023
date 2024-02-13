// IndustrialDashboard.js
import React from 'react';

const IndustrialDashboard = () => {
  return (
    <div id="wrapper">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Industrial Dashboard</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">New Updates</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <nav id="sidebar" className="bg-info">
        <div className="sidebar-header">
          <h3>Options</h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a href="#">Upcoming Visit</a>
          </li>
          <li>
            <a href="#">Past Visit</a>
          </li>
          <li>
            <a href="#">Assigned Person for Visit</a>
          </li>
        </ul>
      </nav>

      {/* Dashboard Content */}
      <div id="content" className="container-fluid">
        <h1>Welcome to the Industrial Dashboard!</h1>
        <p>Here you can manage upcoming visits, view past visits, and assign persons for visits.</p>
      </div>
    </div>
  );
}

export default IndustrialDashboard;

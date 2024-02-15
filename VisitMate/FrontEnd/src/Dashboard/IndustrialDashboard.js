import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from '../Slice/userSlice';
import "../Style/industry.css";

const IndustrialDashboard = () => {
  const userData = useSelector(selectUserData);

  return (
    <div id="wrapper">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Industry Dashboard</span>
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#">Logout</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8 py-3">
            <h2 className="text-center text-white mb-4">Welcome to the Industrial Dashboard!</h2>
            {/* Profile Table */}
            <div className="table-responsive">
              <table className="table table-dark table-bordered table-striped text-white">
                <tbody>
                  <tr>
                    <td className="text-white"><b>User Id</b></td>
                    <td>{userData?.userId}</td>
                  </tr>
                  <tr>
                    <td className="text-white"><b>UserName</b></td>
                    <td>{userData?.username}</td>
                  </tr>
                  <tr>
                    <td className="text-white"><b>CompanyName</b></td>
                    <td>{userData?.companyName}</td>
                  </tr>
                  <tr>
                    <td className="text-white"><b>CompanyInfo</b></td>
                    <td>{userData?.companyInfo}</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
            {/* End of Profile Table */}
            
            {/* Button */}
            <hr />
            <div className="text-center text-white">
              <button
                type="button"
                className="btn btn-white"
              >
                <b>Update Visiting Information</b>
              </button>
            </div>
            {/* End of Button */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustrialDashboard;

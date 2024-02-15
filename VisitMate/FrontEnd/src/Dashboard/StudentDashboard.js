import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserData } from '../Slice/userSlice';
import StudentDashbordbg from "../public/Images/studentdashboard.webp"; // Import the background image

const StudentDashboard = () => {
  const userData = useSelector(selectUserData);

  return (
    <div id="wrapper">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Student Dashboard</span>
          <div className="navbar-nav ms-auto">
          
                    {/* Link to the Industry page */}
                    <Link to="/Industrypage" className="nav-link"><i class="fs-17 bi-building"></i>
                      Industry Visit
                    </Link>
            
            <a className="nav-link" href="#">Logout</a>
          </div>
        </div>
      </nav>
      {/* Sidebar */}
      
          
          <div class="col py-3" style={{
            backgroundImage: `url(${StudentDashbordbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right'
          }}>

            {/* Main Content Table of student information*/}
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-8 py-3">
                  <h2 className="text-center text-black mb-4">Welcome to the Student Dashboard!</h2>
                  {/* Profile Table */}
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped ">
                      <tbody>
                        <tr>
                          <td className="text-black"><b>User Id</b></td>
                          <td>{userData?.userId}</td>
                        </tr>
                        <tr>
                          <td className="text-black"><b>Student Name</b></td>
                          <td>{userData?.name}</td>
                        </tr>
                        <tr>
                          <td className="text-black"><b>Gender</b></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="text-black"><b>Email</b></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="text-black"><b>Phone</b></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="text-black"><b>Address</b></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="text-black"><b>Department</b></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default StudentDashboard;

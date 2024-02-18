import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from '../Slice/userSlice';
import "../Style/industry.css";

const Profiledata = () => {
  // Use useSelector to access userData from Redux store
  const userData = useSelector(selectUserData);

  return (
    <div id="wrapper">
      {/* Main Content */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8 py-3">
            <h2 className="text-center text-white mb-4">
              <span className="nav-item nav-link">Welcome, {userData?.name}</span>
            </h2>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6 text-white">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6 text-white">
                      <p>{userData?.userId}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 text-white">
                      <label>UserName</label>
                    </div>
                    <div className="col-md-6 text-white">
                      <p>{userData?.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 text-white">
                      <label>AdminName</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData?.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 text-white">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData?.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 text-white">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6 text-white">
                      <p>{userData?.phone}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiledata;

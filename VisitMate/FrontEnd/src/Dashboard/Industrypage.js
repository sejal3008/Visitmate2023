import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from '../Slice/userSlice';
import "../Style/industry.css";

const Industrypage = () => {
  // Use useSelector to access userData from Redux store
  const userData = useSelector(selectUserData);

  return (
    <div id="wrapper">
      {/* Main Content */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8 py-3">
            <h2 className="text-center text-white mb-4">
              <span className="nav-item nav-link"> {userData?.name}Your Industry To Visit</span>
            </h2>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row text-white">
                    <div className="col-md-6">
                      <b><label>IndustryId</label></b>
                    </div>
                    <div className="col-md-6">
                      <p>{userData?.name}</p>
                    </div>
                  </div>

                  <div className="row text-white">
                    <div className="col-md-6">
                      <b><label>IndustryName</label></b>
                    </div>
                    <div className="col-md-6">
                      <p>{userData?.name}</p>
                    </div>
                  </div>
                  <div className="row text-white">
                    <div className="col-md-6">
                      <b><label>IndustryVisitDetails</label></b>
                    </div>
                    <div className="col-md-6">
                      <p>{userData?.name}</p>
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

export default Industrypage;

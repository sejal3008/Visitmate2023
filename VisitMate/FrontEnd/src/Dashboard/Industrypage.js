import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { selectUserData } from '../Slice/userSlice';
import "../Style/industry.css";

const Industrypage = () => {
  const userData = useSelector(selectUserData);
  const [industryData, setIndustryData] = useState(null);
  const industryId = userData?.userData?.industryid;
   // Update this based on how industryId is stored in your Redux store
   console.log(industryId , "industryId");
   console.log(industryData , "industryData");

  useEffect(() => {
    const fetchIndustryData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/industry/${industryId}`);
        console.log(response , "response");
        // Update the API endpoint accordingly
        setIndustryData(response.data);
      } catch (error) {
        console.error('Error fetching industry data:', error);
      }
    };

    if (industryId) {
      fetchIndustryData();
    }
  }, [industryId]);

  return (
    <div id="wrapper">
      {/* Main Content */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8 py-3">
            <h2 className="text-center text-white mb-4">
              <span className="nav-item nav-link">{userData?.name} Your Industry To Visit</span>
            </h2>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  {industryData && (
                    <>
                      <div className="row text-white">
                        <div className="col-md-6">
                          <b><label>IndustryId</label></b>
                        </div>
                        <div className="col-md-6">
                          <p>{industryData.industryid}</p>
                        </div>
                      </div>
                      <div className="row text-white">
                        <div className="col-md-6">
                          <b><label>IndustryName</label></b>
                        </div>
                        <div className="col-md-6">
                          <p>{industryData.company}</p>
                        </div>
                      </div>
                      <div className="row text-white">
                        <div className="col-md-6">
                          <b><label>IndustryVisitDetails</label></b>
                        </div>
                        <div className="col-md-6">
                          <p>{industryData.CompanyInfo}</p>
                        </div>
                      </div>
                    </>
                  )}
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

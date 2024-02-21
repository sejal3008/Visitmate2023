import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, setUserData } from "../Slice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaUserGraduate, FaIndustry } from "react-icons/fa"; // Import icons
import { FaUserPlus } from "react-icons/fa"; // Import the register icon

function Header() {
  const dispatch = useDispatch();
    const navigate= useNavigate();
  const userData = useSelector(selectUserData);
    const [data, setData]=useState({});
    const storedUserData = localStorage.getItem("userData");
    // console.log(storedUserData.userData, "storedUserData");
  useEffect(() => {
   // const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setData(storedUserData);
      // Parse the JSON string and dispatch it to the Redux store
      dispatch(setUserData(JSON.parse(storedUserData)));
    }
  }, [dispatch]);

  // Use useEffect to update localStorage when userData changes
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));

  }, [userData]);
  const handleLogout = ()=>{
     localStorage.removeItem("userData") ;   
     navigate("/")
     console.log(data , "data");
  }


  return (
    <>
      <nav
        className="navbar navbar-dark bg-dark"
        style={{ boxShadow: "0 0 40px 0 rgba(0,0,0,.45)" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand ms-5">
            <Link to="/">
              <h3 style={{ color: "white" }}>VisitMate</h3>
            </Link>
          </a>
  
          {storedUserData ? (
            <span className="ms-auto me-5">
              <button
                type="button"
                className="btn btn-light"
                onClick={handleLogout}
                style={{ backgroundColor: "white", color: "black", float: "right" }}
              >
                <FaUserPlus /> Logout
              </button>
            </span>
          ) : (
            <div>
            <span className="ms-auto me-5">
              <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <FaUserPlus /> Register
              </button>
            </span>

            <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Register Here
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="d-flex flex-column">
                    <Link
                      to="/StudentRegister"
                      className="mb-2 text-decoration-none text-dark"
                    >
                      <FaUserGraduate className="me-2" /> Student
                    </Link>
                    <Link
                      to="/adminResister"
                      className="mb-2 text-decoration-none text-dark"
                    >
                      <FaUser className="me-2" /> Teacher
                    </Link>
                    <Link
                      to="/IndustrialRegister"
                      className="mb-2 text-decoration-none text-dark"
                    >
                      <FaIndustry className="me-2" /> Industrial Owner
                    </Link>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
  


            </div>
          )}
  
         
          {/* <span className="float-right d-flex">
            <div className="rounded-circle bg-info me-5"></div>
            <span className="float-end me-5" style={{ color: "white" }}>
              {storedUserData?.userData?.username}
            </span>
          </span> */}
        </div>
      </nav>
    </>
  );
          }
export default Header;
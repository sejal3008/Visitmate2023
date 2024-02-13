import React from "react";
import { useSelector } from 'react-redux';
import { selectUserData } from '../Slice/userSlice';
import { Link } from "react-router-dom";

function Header() {

 const userData = useSelector(selectUserData);


  return (
    <>
      <nav
        class="navbar navbar-light bg-light"
        style={{ boxShadow: "0 0 40px 0 rgba(0,0,0,.45)" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand ms-5">
            <Link to="/">
              {" "}
              <h3>VisitMate</h3>
            </Link>
          </a>
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
           Resister
          </button>

          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body ">
                  <Link to="/StudentRegister">Student</Link>
                  <Link to="/admin">Teacher</Link>
                  <Link to="/IndustrialRegister"> Industrial Owner</Link>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>

          <span class="float-right d-flex ">
            <div class="rounded-circle bg-info me-5">
            </div>
            <span> Hello {userData?.userData?.name}</span>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Header;

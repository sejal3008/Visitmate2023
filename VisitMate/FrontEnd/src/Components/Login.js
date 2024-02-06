import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-4 h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card text-white"
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "#333531",
                  boxShadow: "0px 25px 80px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="card-body p-4 text-center">
                  <div className="mb-md-1 mt-md-2 pb-2">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-4">
                      Please enter your login and password!
                    </p>
                    <div className="form-outline form-white mb-2">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                    </div>
                    <div className="form-outline form-white mb-2">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>
                    <p className="small mb-2 pb-lg-1">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>

                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

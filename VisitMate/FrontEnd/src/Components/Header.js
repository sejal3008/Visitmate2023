import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav class="navbar navbar-light bg-light" style={{boxShadow:"0 0 40px 0 rgba(0,0,0,.45)"}}>
        <div class="container-fluid">
          <a class="navbar-brand ms-5">
               <Link to='/'> <h3>VisitMate</h3></Link>      
          </a>
           <span class="float-right d-flex ">
           <div class="dropdown m-1">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Resistration
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Student</a></li>
    <li><a class="dropdown-item" href="#">Teacher</a></li>
    <li><a class="dropdown-item" href="#">Industrial Owner</a></li>
  </ul>
</div>
          <div class="rounded-circle bg-info me-5">
            <h3>Vai</h3>
          </div>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Header;

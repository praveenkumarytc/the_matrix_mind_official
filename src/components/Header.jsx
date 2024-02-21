import React from "react";
import "../css/header.css";
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid px-4">
          <a className="navbar-brand fw-bold" href="#">
          <i class="fa-brands fa-pied-piper-pp"></i> Subscription
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* menu section */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-2">
                <a className="nav-link active fw-bold custom-link" 
                aria-current="page" href="#" 
                onMouseOver={(e) => e.target.style.color = "#000"}
                onMouseOut={(e) => e.target.style.color = "#f7f8fe"}
                >
                  About
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-bold custom-link" href="#">
                  Work
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-bold custom-link" href="#">
                  Who it's for
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-bold custom-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-bold custom-link" href="#">
                  FAQs
                </a>
              </li>
            </ul>
            <button className="ms-auto btn1 rounded-pill">See Plans</button>
          </div>
        </div>
      </nav>

      {/* <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:void(0)">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Link</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search" />
        <button class="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav> */}
    </>
  );
}
export default Header;

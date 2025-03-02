import React from "react";

const Footers = () => {
  return (
    <div id="contact" className="container">
      <footer className="row row-cols-5 py-5 my-5 border-top  ">
        <div className="col">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <h1 className="text-muted">Contact Us</h1>
        </div>

        <div className="col"></div>

        <div className="col">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-muted">Home</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-muted">Features</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-muted">Pricing</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-muted">FAQs</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-muted">About</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-muted">Home</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-muted">Features</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-muted">Pricing</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-muted">FAQs</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-muted">About</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footers;

import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import nike_logo from "../../img/nike-logo-49324.png";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand fw-bold fst-italic" href=""><img src={nike_logo} style={{
            width:'60px',
            height:'40px',
            backgroundColor: 'white',
            margin:'auto',
            objectFit:'cover',
            //marginBottom:'10px'
          }} /> NIKE</a>

                <button className="navbar-toggler border border-success p-2 border-opacity-10" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;

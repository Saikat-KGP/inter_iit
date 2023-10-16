import React from "react";
// import "../components/Body.css";
import logo from "../images/logo.png";
// import { NavLink } from "react-router-dom";
import '../components/Navbar.css';


function Navbar() {
    return (
        <div className="pos-fix" style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            {/* <nav className="navbar bg-body-tertiary "> */}
            {/* <div className="container-fluid"> */}
            <div className="navbar-brand mb-0 h1 title" style={{ width: "40%" }}>
                {/* <NavLink to="/dashboard"> */}
                {/* <img src={logo} alt="logo" className="logo"  style={{width:"40%",margin:"5%",height:"80%" }}/> */}
                {/* </NavLink> */}
                
            </div>
            <div className="navbar-brand mb-0" style={{ width: "50%" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                 
                    {/* <div className="div_inner">
                        <strong>
                            About Us
                        </strong>

                    </div>
                    
                    <div className="div_inner">
                        <strong>
                            Contact Us


                        </strong>
                    </div> */}
                    {/* <div className="div_inner">
                    Neurons
                </div> */}

                </div>
            </div>

        </div>
    );
}

export default Navbar;
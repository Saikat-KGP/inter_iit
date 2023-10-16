import React from "react";
// import { NavLink } from "react-router-dom";
import float from "../images/hotel.png";
import '../components/Section.css';
import interior from "../images/extra.png";
import { NavLink } from "react-router-dom";

function Section() {
    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">

                                <div className="block-effect" style={{ '--td': '1.2s' }}>
                                    <div className="block-reveal" style={{ '--bc': '#4040bf', '--d': '.1s' }}>Villas & Resorts</div>
                                    {/* <div className="block-reveal" style={{ '--bc': '#bf4060', '--d': '.5s' }}>Revealing Effect</div> */}
                                    <div className="a-perfect-place">The Best Place To Enjoy Vacation</div>
                                </div>

                                <div className="mt-3 d-flex flex-column">


                                    <button className="but">
                                        <NavLink to="/hotels">
                                            <strong>
                                                BOOK ROOMS

                                            </strong>

                                        </NavLink>
                                    </button>
                                    <img className="interior" src={interior} alt=""
                                        style={{}} />
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-img margin-custom d-flex justify-content-center floater-anim">
                                <img
                                    src={float}
                                    className="img-fluid animated"
                                    alt=""
                                    id="logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;
import React from "react";
function Header({handleclick}){
    return (
        <nav className="d-flex col-12 text-start pt-3 pb-3 container roboto-medium">
            <div className="col-xl-6 col-lg-6">
                <ul className="d-flex col-12 nav-list ">
                    <li className="col-3 list-group-item">Home</li>
                    <li className="col-3 list-group-item">About</li>
                    <li className="col-3 list-group-item">Contact</li>
                </ul>
            </div>
            <div className="d-flex justify-content-between col-xl-6 col-lg-6 rounded-4"><h5 className="fs-4 fw-bolder text-landing" style={{fontFamily:'Robotobold'}}>Landing</h5><button className="btn btn-dark position-static z-1" onClick={handleclick}>Get Started</button></div>
            {/* <div className="col-xl-2 col-lg-2"></div> */}
        </nav>
    )
}
export default Header
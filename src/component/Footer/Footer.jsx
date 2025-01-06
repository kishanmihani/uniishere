
import React from "react"
function Footer(){
    return (
        <div className="container-fluid m-0 p-0 pb-3" style={{background:'#E7ECFF'}}>
          <button className="text-white pt-1 pb-1 rounded-1 w-100" style={{background:'#6008B9'}}>
            <div className="container text-start ps-5">We are going to build an new era in which the things will be changed</div>
            </button>
        <div className="container pt-4 ">
            {/* <ul>
                <li>©2023 Assassins</li>
            </ul> */}
            <div className="d-flex justify-content-between  pb-3 rounded-4"><p className="text-secondary fw-normal">©2023 Assassins</p><h5 className="fs-4 fw-bolder text-landing" style={{fontFamily:'Robotobold'}}>Landing</h5><button className='text-white fs-6 fw-normal pt-1 pb-1 p-5 footer-text' >Purchase Now</button></div>
            <hr />
        </div>
        </div>
    )
}
export default Footer
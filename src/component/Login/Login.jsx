import React from "react"
import flashbackground from '../../assets/image/flashbackground.svg'
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { ImAppleinc } from "react-icons/im";
function Login(){
    return (
        <div className='col-11 d-flex text-start align-items-center  roboto-medium ms-auto '>
                    <div className='col-6 ps-5'>
                        <div>
                        <h1 className='headein-color fs-1 fw-bolder'>Assassins</h1>
                        </div>
                        <div className="card">
                            <div className="card-body">
                        {/* <h1 className='headein-color fs-1 fw-bolder'>Assassins</h1> */}
                        <form>
                        <div >
                        <h1 className='headein-color fs-1 fw-bolder p-2 text-center'>Assassins</h1>
                        <div className="pb-3">
                            <label htmlFor="email" className="form-label fw-b mb-0">Email or Phone</label>
                            <input id="email" name='email' className="form-control"></input>
                        </div>
                        <div className="pb-3">
                            <label htmlFor="Password" className="form-label mb-0 fw-normal">Password</label>
                            <input id="Password" name='Password' className="form-control"></input>
                        </div>
                        <div className="text-center  pb-3">
                            <button className="btn btn-outline-dark ps-4 pe-4 col-4"><span>Log In</span></button>
                        </div>
                        <p className="ortext text-center">OR</p>
                        </div>
                        <div className="text-center  pb-2">
                            <button className="btn btn-outline-dark ps-3 pe-3 col-4"><FcGoogle /><span>Google</span></button>
                        </div>
                        <div className="text-center pb-2">
                            <button className="btn btn-outline-dark ps-4 pe-4 col-4"><ImAppleinc /><span>Apple</span></button>
                        </div>
                        <div className="text-center pb-2">
                            <button className="btn btn-outline-dark ps-4 pe-4 col-4"><RiFacebookCircleFill style={{color:'#316FF6'}} /><span>Facebook</span></button>
                        </div>
                        </form>
                        </div>
                        </div>
                        
                        {/* <div className='nav-list fw-normal'> 
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br/>commodo ligula eget dolor. Aenean massa. Cum sociis natoque<br /> penatibus et magnis dis parturient montes, nascetur ridiculus 
                            mus.<br /><br /> Donec quam felis, ultricies nec, pellentesque eu, pretium quis,<br /> sem. Nulla consequat massa quis enim</p>
                        </div> */}
                        {/* <div className='col-12'>
                            <br />
                            <button className=' col-4 btn btn-primary me-3' style={{    background: 'linear-gradient(to right, #111B47 0%, #656A7E 50%, #2942AD 100%)',
            color: 'white'}}>Log In</button>
                            <button className='col-4 btn btn-outline-dark' style={{background:'white',color:'#091133'}}>Sign Up</button>
                        </div> */}
                    </div>
                    <div className='col-6 d-flex justify-content-center position-relative' style={{alignItems: 'center'}}  >
                    {/* <img src={flashanimations} className='position-absolute' style={{ height: 'calc(100% - 196px)', alignItems: 'center',display: 'flex',right: 0,left: 'inherit'}} /> */}
                    <img src={flashbackground} className=' nnnb'  style={{top:'-71px',height: '100vh',width: '100%' }} />
                        
                    
                    </div>
                </div> 
    )
}
export default Login
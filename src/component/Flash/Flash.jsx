import React from 'react'
import flashbackground from '../../assets/image/flashbackground.svg'
import flashanimations from '../../assets/image/flashanimations.svg'
function Flash({handleclick,Login}){
    // const imgurl =`url()`
    return (
        <div className='col-11 d-flex text-start align-items-center Flashscreen roboto-medium ms-auto'>
            <div className='col-6 ps-5'>
                <div>
                <h1 className='headein-color fs-1 fw-bolder' style={{fontFamily:'Robotobold'}}>Assassins</h1>
                </div>
                <div className='nav-list fw-normal'> 
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br/>commodo ligula eget dolor. Aenean massa. Cum sociis natoque<br /> penatibus et magnis dis parturient montes, nascetur ridiculus 
                    mus.<br /><br /> Donec quam felis, ultricies nec, pellentesque eu, pretium quis,<br /> sem. Nulla consequat massa quis enim</p>
                </div>
                <div className='col-12'>
                    <br />
                    <button className=' col-4 btn btn-primary me-3' style={{    background: 'linear-gradient(to right, #111B47 0%, #656A7E 50%, #2942AD 100%)',
    color: 'white'}} onClick={handleclick} type='button'>Log In</button>
                    <button className='col-4 btn btn-outline-dark' style={{background:'white',color:'#091133'}}>Sign Up</button>
                </div>
            </div>
            <div className='col-6 d-flex justify-content-center position-relative' style={{alignItems: 'center'}}  >
            <img src={flashanimations} className='position-absolute' style={{ height: 'calc(100% - 196px)', alignItems: 'center',display: 'flex',right: 0,left: 'inherit'}} />
            <img src={flashbackground} className=' nnnb'  style={{top:'-71px',height: '100vh',width: '100%' }} />
                
            
            </div>
        </div>
    )
}

export default Flash
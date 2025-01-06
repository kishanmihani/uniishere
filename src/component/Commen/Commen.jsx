import React from "react"
import { Imagesdata} from "../../data/dataimge"
import Imgicon from '../../assets/react.svg'
function Commen(){
    
    return (
     <div>
        {Imagesdata.map(data =>{
          const {id,imgSrc}=data;
          return (
            <div key={id} className="container text-start roboto-medium pt-5 pb-5 mt-5 mb-5">
              <div className={`col-12 d-flex align-items-center ${id === 0 ? 'row-reverse' :''}`} >
                 {/* <div className="col-12 d-flex align-items-center "> */}
            
              <div className="col-6">
                <img  src={imgSrc} alt='not image show'/>
              </div>
              <div className="col-6">
                 <div>
                    <h2 className="headein-color lh-lg">Light, Fast & Powerful</h2>
                 </div>
                 <div >
                   <p className={`${id === 1 ? 'text-light-fast' : 'nav-list'} fw-normal `}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus<br /><br /> 
                   mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                 </div>
                 {id === 0 ? <div className="col-12 d-flex">
                   <div className="col-6">
                    <p className="mb-0"><img src={Imgicon} alt='icon not visible' style={{height:'50px',width:'50px'}}/></p>
                    <p className="fw-bolder fs-6 mb-0">Title Goes Her</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
                   </div>
                   <div className="col-6">
                    <p className="mb-0"><img src={Imgicon} alt='icon not visible' style={{height:'50px',width:'50px'}}/></p>
                    <p className="fw-bolder fs-6 mb-0">Title Goes Her</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
                   </div>
                 </div>:'' }
              </div>
              
            </div>
      </div>
          )
        })}  
        </div>

    )
}
export default Commen
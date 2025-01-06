import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Flash from './component/Flash/Flash'
import Commen from './component/Commen/Commen'
import Commenlast from './component/Commenlast/Commenlast'
import Footer from './component/Footer/Footer'
import Login from './component/Login/Login'

function App() {
const [Loginc,setLoginC]=useState(false)
const LoginView = useCallback(()=>{
  setLoginC(true)
},[Loginc])
  return (
      <div className='container-fluid m-0 p-0'>
        {Loginc ? <Login />: <div><Header handleclick={LoginView} />
       <Flash  handleclick={LoginView}/>
       <Commen />
       <Commenlast />
       <Footer /></div> }
        {/* <Login />
       <Header />
       <Flash />
       <Commen />
       <Commenlast />
       <Footer /> */}
      </div>
  )
}

export default App

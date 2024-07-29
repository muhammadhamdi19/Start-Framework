

import {  Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";



export default function Project() {





  return (
    <>
    
<Navbar/>


    <div className="content  ">
      <Outlet/>
    </div>

    <footer className="bg-[#2C3E50] py-16 flex justify-evenly md:px-20">
      <div className="location text-center text-white w-1/3 px-10">
        <h3 className="font-semibold sm:text-2xl text-center md:text-3xl mb-2">LOCATION</h3>
        <p className="mb-2">2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>

      <div className="social text-center text-white w-1/3 px-10 flex flex-col items-center">
        <h3 className="font-semibold sm:text-2xl text-center md:text-3xl mb-2">AROUND THE WEB</h3>
        <div className="social-icons ">
          <ul className="flex ">
            <li className=' border h-9 w-9 me-2 rounded-full flex justify-center items-center'><a href=""><i className="fa-brands fa-facebook "></i></a></li>
            <li className='  border h-9 w-9 me-2 rounded-full flex justify-center items-center'><a href=""><i className="fa-brands fa-twitter"></i></a></li>
            <li className='  border h-9 w-9 me-2 rounded-full flex justify-center items-center'><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
            <li className='  border h-9 w-9 rounded-full flex justify-center items-center'><a href=""></a><i className="fa-solid fa-globe"></i></li>
          </ul>
        </div>
      </div>

      <div className="location text-center text-white w-1/3 px-10">
        <h3 className="font-semibold sm:text-2xl text-center md:text-3xl mb-2">ABOUT FREELANCER</h3>
        <p className="mb-2">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </footer>
    <div className="copyright text-center bg-[#1A252F] py-7 text-white">
      <p>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}

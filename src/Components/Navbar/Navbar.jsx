import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {

  console.log(document.querySelector(".nav-small"));

  // function toggleButton(){
  //   document.querySelectorAll(".toggle").addEventListener("click", function(){
  //     document.querySelector(".nav-small").classList.toggle("hidden")
  //     // console.log("hi");/
  //     })
  // }
  
  
  
  useEffect(() => {
  // toggleButton()
let toggle = document.querySelector(".toggle")
  toggle.addEventListener("click", function(){
    document.querySelector(".nav-small").classList.toggle("hidden")
    // console.log("hi");/
    })
  })
  return (
    <>
    <nav className="bg-[#2C3E50] border-gray-200 fixed top-0 end-0 start-0 z-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Start Framework</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button"  className="toggle inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="toggle w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path className="toggle" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="nav-small hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium bg-[#2C3E50]  flex  md:text-white  p-4 md:p-0 mt-4 text-white sm:text-center sm:flex sm:flex-col sm:justify-start sm:items-start    md:flex-row md:justify-center md:items-center  md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#2C3E50] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className="sm:mb-4 md:mb-0">
        <NavLink className={({isActive})=>isActive ? "active about-link me-5  font-bold  uppercase p-2 " : "about-link me-5  font-bold  uppercase p-2 "} to="/about">About</NavLink>
        </li>
        <li className="sm:mb-4 md:mb-0">
        <NavLink className={({isActive})=>isActive ? "active portfolio-link me-5  font-bold  uppercase p-2 " : "portfolio-link me-5  font-bold  uppercase p-2 "} to="/portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="sm:mb-4 md:mb-0">
        <NavLink className={({isActive})=>isActive ? "active contact-link font-bold  uppercase p-2 " : "contact-link font-bold  uppercase p-2 "} to="/contact">CONTACT</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

import { useEffect } from "react"
import portPhoto1 from "../../../images/poert1.png"
import portPhoto2 from "../../../images/port2.png"
import portPhoto3 from "../../../images/port3.png"


export default function Portfolio() {

  useEffect(() => {
    let card = document.querySelectorAll(".inner-card")
  

    for(let i=0;i<card.length;i++){
        let images = card[i].querySelector("img").getAttribute("src")
      card[i].addEventListener("click",function(){
        document.querySelector(".layer").classList.replace("hidden" , "flex")
        document.querySelector(".layer img").setAttribute("src",images)
      })
    }

    document.querySelector(".layer").addEventListener("click",function(e){
      let layer = document.querySelector(".layer img")
      if(e.target != layer){
        document.querySelector(".layer").classList.replace("flex","hidden")
      }
    })
    return () => {
    }
  }, [])


  return (

    
    <div className="portfolio flex justify-center items-center  py-4 pt-20">
      <div className="layer hidden  justify-center items-center fixed top-0 end-0 start-0 bottom-0 bg-black bg-opacity-55 z-40">
        <img  className="sm:w-[90%] md:w-[40%] rounded-xl"  alt="" />
      </div>
      <div className="container w-[80%] mx-auto">
      <div className="about-content  ">
      <div className="frame pt-4  mb-16 text-center ">
          <h2 className="text-4xl font-bold uppercase mb-4 text-[#2c3e50]">portfolio component</h2>
          <div className="style mt-5 flex justify-center items-center ">
            <div className="left w-20 h-1 bg-[#2c3e50]"></div>
            <div className="star text-[#2c3e50] mx-3"><i className="fa-solid fa-star"></i></div>
            <div className="right w-20 h-1 bg-[#2c3e50]"></div>
          </div>
        </div>
      <div className="port-cards flex flex-wrap  ">
        <div className="card md:w-1/3  sm:w-full mb-4 group relative cursor-pointer">
          <div className="inner-card w-[95%]  mx-auto">
            <img src={portPhoto1} className="rounded-lg w-full" alt="" />
            <div className="card-layer bg-[#2EC2A5] transition-all duration-500 group-hover:opacity-100 absolute top-0 end-2 start-2 bottom-0 rounded-lg bg-opacity-80 opacity-0 flex justify-center items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>

        <div className="card md:w-1/3 mb-4  group cursor-pointer relative">
          <div className="inner-card w-[95%] mx-auto ">
            <img src={portPhoto2} className="rounded-lg w-full" alt="" />
          
            <div className="card-layer bg-[#2EC2A5] transition-all duration-500 group-hover:opacity-100 absolute top-0 end-2 start-2 bottom-0 rounded-lg bg-opacity-80 opacity-0 flex justify-center items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
          
        </div>

        <div className="card md:w-1/3  sm:w-full mb-4 group relative cursor-pointer">
          <div className="inner-card w-[95%]  mx-auto">
            <img src={portPhoto3} className="rounded-lg w-full" alt="" />
            <div className="card-layer bg-[#2EC2A5] transition-all duration-500 group-hover:opacity-100 absolute top-0 end-2 start-2 bottom-0 rounded-lg bg-opacity-80 opacity-0 flex justify-center items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>

        <div className="card md:w-1/3 mb-4  group cursor-pointer relative">
          <div className="inner-card w-[95%] mx-auto ">
            <img src={portPhoto1} className="rounded-lg w-full" alt="" />
          
            <div className="card-layer bg-[#2EC2A5] transition-all duration-500 group-hover:opacity-100 absolute top-0 end-2 start-2 bottom-0 rounded-lg bg-opacity-80 opacity-0 flex justify-center items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
          
        </div>

        <div className="card md:w-1/3  sm:w-full mb-4 group relative cursor-pointer">
          <div className="inner-card w-[95%]  mx-auto">
            <img src={portPhoto2} className="rounded-lg w-full" alt="" />
            <div className="card-layer bg-[#2EC2A5] transition-all duration-500 group-hover:opacity-100 absolute top-0 end-2 start-2 bottom-0 rounded-lg bg-opacity-80 opacity-0 flex justify-center items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>

        <div className="card md:w-1/3 mb-4  group cursor-pointer relative">
          <div className="inner-card w-[95%] mx-auto ">
            <img src={portPhoto3} className="rounded-lg w-full" alt="" />
          
            <div className="card-layer bg-[#2EC2A5] transition-all duration-500 group-hover:opacity-100 absolute top-0 end-2 start-2 bottom-0 rounded-lg bg-opacity-80 opacity-0 flex justify-center items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
          
        </div>

      </div>

      

      </div>
      </div>
    </div>
  )
}

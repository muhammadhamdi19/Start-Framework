import { useEffect } from "react"


export default function Contact() {

  useEffect(() => {
    let input = document.querySelectorAll(".contact form input")
    let label = document.querySelectorAll(".contact form label")
    for(let i=0;i<input.length;i++){
      input[i].addEventListener("keyup",function(){
        label[i].classList.replace("translate-y-10","translate-y-0")
        
      })
    }
  
    return () => {
      
    }
  }, [])
  

  return (
    <>
    <div className="contact py-6 pt-20">
      <div className="container w-[80%] mx-auto ">
      <div className="frame pt-2  mb-10 text-center ">
          <h2 className="text-4xl font-bold uppercase mb-4 text-[#2c3e50]">conatct section</h2>
          <div className="style mt-5 flex justify-center items-center ">
            <div className="left w-20 h-1 bg-[#2c3e50]"></div>
            <div className="star text-[#2c3e50] mx-3"><i className="fa-solid fa-star"></i></div>
            <div className="right w-20 h-1 bg-[#2c3e50]"></div>
          </div>
        </div>

      <form className=" sm:w-[60%]  mx-auto flex flex-col justify-center items-center ">
        <label htmlFor="name" className="text-[#2EC2A5] px-3 translate-y-10 transition-all duration-200 self-start">userName:</label>
        <input className="w-full border-t-0 border-e-0 border-s-0  border-b-1 rounded-lg px-4 py-3 z-10 focus:outline-none focus:shadow-none focus:border-none mb-6" name="name" type="text" placeholder="usreName" />
        <label htmlFor="name" className="text-[#2EC2A5] px-3 translate-y-10 transition-all duration-200 self-start">userAge:</label>
        <input className="w-full border-t-0 border-e-0 border-s-0  border-b-1 rounded-lg px-4 py-3 z-10 focus:outline-none focus:shadow-none focus:border-none  mb-6" type="text" placeholder="usreAge" />
        <label htmlFor="name" className="text-[#2EC2A5] px-3 translate-y-10 transition-all duration-200 self-start">userEmail:</label>
        <input className="w-full border-t-0 border-e-0 border-s-0  border-b-1 rounded-lg px-4 py-3 z-10 focus:outline-none focus:shadow-none focus:border-none  mb-6" type="email" placeholder="usreEmail" />
        <label htmlFor="name" className="text-[#2EC2A5] px-3 translate-y-10 transition-all duration-200 self-start">userPassword:</label>
        <input className="w-full border-t-0 border-e-0 border-s-0  border-b-1 rounded-lg px-4 py-3 z-10 focus:outline-none focus:shadow-none focus:border-none  mb-6" type="password" placeholder="usrePassword" />
        <button className=" self-start ms-2 bg-[#2EC2A5] rounded-lg text-white py-2 px-4">send Message</button>
      </form>
      </div>
    </div>
    </>
  )
}

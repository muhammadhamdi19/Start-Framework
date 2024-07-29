import homeImg from "../../../images/avataaars.svg"


export default function Home() {
  return (
    <>

    <div className="home flex justify-center items-center bg-[#1ABC9C] py-11 pt-20">
      <div className="home-content text-center">
        <img className="w-full mb-5" src={homeImg} alt="home photo" />
        <div className="frame pt-4 text-white mb-5">
          <h2 className="text-4xl font-bold uppercase ">Start Framework</h2>
          <div className="style mt-5 flex justify-center items-center ">
            <div className="left w-20 h-1 bg-white"></div>
            <div className="star text-white mx-3"><i className="fa-solid fa-star"></i></div>
            <div className="right w-20 h-1 bg-white"></div>
          </div>
        </div>
        <p className=" text-white ">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
    </>
  )
}

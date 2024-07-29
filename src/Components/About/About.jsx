

export default function About() {
  return (
    <div className="about flex justify-center items-center bg-[#1ABC9C] py-40">
      <div className="container w-[80%] mx-auto">
      <div className="about-content  text-white">
      <div className="frame pt-4 text-white mb-5 text-center ">
          <h2 className="text-4xl font-bold uppercase mb-6">about component</h2>
          <div className="style mt-5 flex justify-center items-center ">
            <div className="left w-20 h-1 bg-white"></div>
            <div className="star text-white mx-3"><i className="fa-solid fa-star"></i></div>
            <div className="right w-20 h-1 bg-white"></div>
          </div>
        </div>
      
      <div className="info flex sm:flex-wrap md:flex-nowrap">
        <p className="mb-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      </div>
      </div>
    </div>
  )
}

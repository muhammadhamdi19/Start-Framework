import { createHashRouter, RouterProvider } from "react-router-dom";
import Project from "./Components/Project/Project";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";


export default function App() {

  const router = createHashRouter([
    {path:"/" , element:<Project/> , children:[
      {path:"/" , element:<Home/>},
      {path:"/about" ,element:<About/>},
      {path:"/portfolio" , element: <Portfolio/>},
      {path:"/contact" ,element:<Contact/>},
      {path:"*" , element:<Error/>}
      
    ]}
  ])
  return (
    <RouterProvider router={router}/>
  )
}

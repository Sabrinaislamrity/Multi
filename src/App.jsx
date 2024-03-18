import Rootlayout from "./components/root/Rootlayout";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Home from "./pages/Home"
import Service from "./pages/Service"
import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider,
} from "react-router-dom";

const router =  createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/service" element={<Service/>}></Route>
    <Route path="/feature" element={<Feature/>}></Route>

  </Route>
))

function App() {
 

  return (
<>
<RouterProvider router={router}/>




</>
 
  )
}



export default App

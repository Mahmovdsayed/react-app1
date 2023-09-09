import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { RouterProvider , createHashRouter } from 'react-router-dom';
import Notfound from './Components/Notfound/Notfound';
import Portfolio from './Components/Portfolio/Portfolio';
import Layout from './Components/layout/Layout';
import Contact from './Components/Contact/Contact';


function App() {
  const router = createHashRouter([{
    path: "", element:<Layout/>,
    children:[
      {index:true, element:<Home/>},
      {path:"about", element:<About/>},
      {path:"portfolio", element:<Portfolio/>},
      {path:"contact", element:<Contact/>},
      {path:"*", element:<Notfound/>}
    ]
    
  },])
  return <>
   <RouterProvider router={router}></RouterProvider>
  </>
   
 
}

export default App;

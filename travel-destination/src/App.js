import {Routes, Route,createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home.js'
import ToursDetails from './components/toursdetails/ToursDetails.js';


function App() {
 /* const route=createBrowserRouter([{
    path:'/',
    element:<Home/>,
  },
  {
    path:"/city/:id",
    element:<ToursDetails/>
  }

]);*/

  return (
    <div className="App">
    
   {/*} <RouterProvider router={route}/>{*/}
   <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/city/:id" element={<ToursDetails/>}></Route>
      </Routes>

    </div>
  );
}


export default App;

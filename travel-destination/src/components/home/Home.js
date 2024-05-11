import Header from  '../header/Header';
import Footer from "../footer/Footer.js"
import Tours from "../tours/Tours.js";

//lab 17


import ToursDetails from '../toursdetails/ToursDetails';


function Home(){
    const data=require('../../data/db.json');
    return(
   <>
   <Header/>
   <Tours/>
   <Footer/>  
   </>)
}

export default Home


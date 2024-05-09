import Header from  '../header/Header';
import Footer from "../footer/Footer.js"
import Tours from "../tours/Tours.js";

function Home(){
    const data=require('../../data/db.json');
    return(
   <>
   <Header/>
   {
    data.map(element=>{
       return( <div key={element.id}>
            <Tours TourName={element.name} TourImage={element.image} />
        </div>)
    })
   }
   <Footer/>  
   </>)
}

export default Home


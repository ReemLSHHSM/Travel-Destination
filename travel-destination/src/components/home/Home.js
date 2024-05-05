import Header from  "/home/reem/Travel-Destination/travel-destination/src/components/header/Header.js";
import Footer from "/home/reem/Travel-Destination/travel-destination/src/components/footer/Footer.js"
import Tours from "/home/reem/Travel-Destination/travel-destination/src/components/tours/Tours.js";

function Home(){
    const data=require('/home/reem/Travel-Destination/travel-destination/src/data/db.json');
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


import './Tours.css'
import Tour from './tour/Tour.js'
import db from '../../data/db.json'


const tour=db;

function Tours(props) {
    return (
        // <div class='card'>
        //     <h2>{props.TourName}</h2>
        //     <img src={props.TourImage} alt={props.TourName} />
        //     <hr />
        // </div>
        <Tour tour={tour}/>
    );
}


export default Tours;



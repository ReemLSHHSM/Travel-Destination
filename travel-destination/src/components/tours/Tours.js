import './Tours.css'
function Tours(props) {
    return (
        <div class='card'>
            <h2>{props.TourName}</h2>
            <img src={props.TourImage} alt={props.TourName} />
            <hr />
        </div>
    );
}


export default Tours;



import { Link } from 'react-router-dom';
import ToursDetails from '../../toursdetails/ToursDetails';

function Tour(props) {
  const data = props.tour;

  return (
    <div>
      {data.map(element => (
        <Link key={element.id} to={`/city/${element.id}`} className="card-link">
          <div className="card">
            <h4>{element.name}</h4>
            <img src={element.image} alt={element.name} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Tour;

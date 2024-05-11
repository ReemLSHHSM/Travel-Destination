import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import db from '../../data/db.json';
import './ToursDetails.css';

function ToursDetails() {
  const data = db;
  const { id } = useParams();

  return (
    <>
      <Header />
      {data.map(tour => {
        if (tour.id == id) {
          return (
            <div key={tour.id} className="card">
              <h4>{tour.name}</h4>
              <img className="tour-image" src={tour.image} alt={tour.name} />
              {tour.info.split('.').slice(0, 3).map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          );
        } else {
          return (
            <div key={tour.id} className="card">
              <h4>{tour.name}</h4>
              <img className="tour-image" src={tour.image} alt={tour.name} />
            </div>
          );
        }
      })}
      <Footer />
    </>
  );
}

export default ToursDetails;


import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import db from '../../data/db.json';
import './ToursDetails.css';

function ToursDetails() {
    const [isClicked, setIsClicked] = useState(false);

    const data = db;
    const { id } = useParams();

    const showall = () => {
        setIsClicked(!isClicked); // Toggle isClicked state
    };

    return (
        <>
            <Header />
            {data.map((tour) => {
                if (tour.id == id) {
                    return (
                        <div key={tour.id} className="card">
                            <h4>{tour.name}</h4>
                            <img className="tour-image" src={tour.image} alt={tour.name} />
                          
                            {isClicked ? (
                                <>
                                <p>{tour.info}</p>
                                    <button onClick={showall}>See less</button>
                                    
                                    
                                </>
                            ) : (
                                <>
                                    
                                    <p>{tour.info.split('.').slice(0, 1)}</p>
                                    <button onClick={showall}>See more</button>
                                </>
                            )}
                        </div>
                    );
                }
            })}
            <Footer />
        </>
    );
}

export default ToursDetails;





 {/*} {data.map(tour => {
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
    {*/}
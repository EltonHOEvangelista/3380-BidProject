//Bid.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Bid = () => {

    const { vin } = useParams();

    const [vehicle, setVehicle] = useState(null);

    const [bid, setBid] = useState({
      bidPrice: '',
      bidTime: ''
    });

    const [bids, setBids] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      axios.get(`http://localhost:5000/bid/${vin}`)
          .then(response => {
            setVehicle(response.data);
            setBids(response.data.bids || []);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setError('Error fetching data');
            setLoading(false);
          });
    }, [vin]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setBid(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const newBid = {
        bidPrice: bid.bidPrice,
        bidTime: new Date()
      };
      
      axios.put(`http://localhost:5000/bid/${vin}`, newBid)
        .then(response => {
          console.log('Bid placed:', response.data);
          setBid({
            bidPrice: '',
            bidTime: ''
          });
          setBids(prevBids => [...prevBids, newBid]);
        })
        .catch(error => {
          console.error('There was an error adding the item!', error);
        });
    };

    if (!vehicle) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
        <>
            <div className='bidContainer'>
              <div className='column'>
                <div className='inner-div'>
                  <img src={vehicle.imgSrc} alt={vehicle.title} />
                </div>
                <div className='inner-div'>
                  <h2>Vehicle Details</h2>
                  <div className='vehicle-details'>
                    <label htmlFor="vehicleTitle">Title</label>
                    <input type="text" name="vehicleTitle" id="vehicleTitle" value={vehicle.title} disabled/>

                    <label htmlFor="vehicleMaker">Maker</label>
                    <input type="text" name="vehicleMaker" id="vehicleMaker" value={vehicle.maker} disabled/>

                    <label htmlFor="vehicleModel">Model</label>
                    <input type="text" name="vehicleModel" id="vehicleModel" value={vehicle.model} disabled/>

                    <label htmlFor="vehicleYear">Year</label>
                    <input type="number" name="vehicleYear" id="vehicleYear" value={vehicle.year} disabled/>

                    <label htmlFor="vehicleColor">Color</label>
                    <input type="text" name="vehicleColor" id="vehicleColor" value={vehicle.color} disabled/>

                    <label htmlFor="vehicleEngineType">Engine Type</label>
                    <input type="text" name="vehicleEngineType" id="vehicleEngineType" value={vehicle.engineType} disabled/>

                    <label htmlFor="vehicleTransmission">Transmission</label>
                    <input type="text" name="vehicleTransmission" id="vehicleTransmission" value={vehicle.transmission} disabled/>

                    <label htmlFor="vehicleMileage">Mileage</label>
                    <input type="number" name="vehicleMileage" id="vehicleMileage" value={vehicle.mileage} disabled/>

                    <label htmlFor="vehicleLocation">Location</label>
                    <input type="text" name="vehicleLocation" id="vehicleLocation" value={vehicle.location} disabled/>

                    <label htmlFor="vehicleDescription">Description</label>
                    <input type="text" name="vehicleDescription" id="vehicleDescription" value={vehicle.description} disabled/>
                  </div>
                </div>
              </div>
              <div className='column'>
                <div className='inner-div'>
                  <h1>Bid</h1>
                  <p>Submit your top bid</p>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="currentBid">Current Bid</label>
                    <input type="number" name="currentBid" id="currentBid" value={vehicle.price} disabled/>

                    <label htmlFor="bidPrice">Your Bid</label>
                    <input type="number" name="bidPrice" id="bidPrice" value={bid.bidPrice} onChange={handleChange}/>
                    
                    <button type="submit" name="placeBid" id="placeBid">Bid</button>
                  </form>
                </div>
                <div className='inner-div'>
                  <h2>Bid Records</h2>
                  {bids.map((bid, index) => (
                            <p key={index}>{`Bid ${index + 1}: $${bid.bidPrice} at ${new Date(bid.bidTime).toLocaleString()}`}</p>
                        ))}
                </div>
              </div>
            </div>
        </>    
    );
};

export default Bid;

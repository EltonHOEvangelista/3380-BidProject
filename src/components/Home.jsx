//Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const [vehicles, setVehicles] = useState(null);

    const handleClick = (vehicle) => {
        navigate(`/bid/${vehicle.vin}`, { state: { vehicle } });
    };

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => setVehicles(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!vehicles) {
        return <div>Loading...</div>;
    }

    return (
        <div className="vehicleContainer">
            {vehicles.map((vehicle, index) => (
                <div key={index} className="inner-div" onClick={() => handleClick(vehicle)}>
                    <img src={vehicle.imgSrc} alt={vehicle.title} />
                    <div className="text">
                        <h1>{vehicle.title}</h1>
                        <h2>{vehicle.price}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
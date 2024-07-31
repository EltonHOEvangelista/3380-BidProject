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
        <div className="vehicleContainer rounded-2xl">
            {vehicles.map((vehicle, index) => (
                <div key={index} className="inner-div cursor-pointer" onClick={() => handleClick(vehicle)}>
                    <img src={vehicle.imgSrc} alt={vehicle.title} />
                    <div className="text">
                        <h1>{vehicle.title}</h1>
                        <h2>${vehicle.price.toLocaleString()}</h2>
                    </div>
                    {/* <div className="p-4 text-center">
                        <h2 className="text-2xl font-semibold mb-2">{vehicle.title}</h2>
                        <p className="text-xl font-bold text-gray-700 mb-2">${vehicle.price.toLocaleString('en-US')}</p>
                    </div> */}
                </div>
            ))}
        </div>
    );
};

export default Home;
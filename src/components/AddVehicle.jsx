//AddVehicle.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddVehicle = () => {

  const [vehicle, setVehicle] = useState({
    vin: '',
    title: '',
    maker: '',
    model: '',
    year: '',
    color: '',
    engineType: '',
    transmission: '',
    mileage: '',
    location: '',
    description: '',
    price: '',
    imgSrc: '',
    bids: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/addvehicle', vehicle)
      .then(response => {
        console.log('Vehicle added:', response.data);
        setVehicle({
          vin: '',
          title: '',
          maker: '',
          model: '',
          year: '',
          color: '',
          engineType: '',
          transmission: '',
          mileage: '',
          location: '',
          description: '',
          price: '',
          imgSrc: '',
          bids: []
        });
      })
      .catch(error => {
        console.error('There was an error adding the item!', error);
      });
  };

  return (
    <div class='bidContainer'>
        <div class='column'>
            <div class='inner-div'>
                <h2>Vehicle Details</h2>
                <div class='vehicle-details'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="vin">VIN</label>
                        <input type="text" name="vin" id="vin" value={vehicle.vin} onChange={handleChange} />

                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" value={vehicle.title} onChange={handleChange} />

                        <label htmlFor="maker">Maker</label>
                        <input type="text" name="maker" id="maker" value={vehicle.maker} onChange={handleChange} />

                        <label htmlFor="model">Model</label>
                        <input type="text" name="model" id="model" value={vehicle.model} onChange={handleChange} />

                        <label htmlFor="year">Year</label>
                        <input type="number" name="year" id="year" value={vehicle.year} onChange={handleChange} />

                        <label htmlFor="color">Color</label>
                        <input type="text" name="color" id="color" value={vehicle.color} onChange={handleChange} />

                        <label htmlFor="engineType">Engine Type</label>
                        <input type="text" name="engineType" id="engineType" value={vehicle.engineType} onChange={handleChange} />

                        <label htmlFor="transmission">Transmission</label>
                        <input type="text" name="transmission" id="transmission" value={vehicle.transmission} onChange={handleChange} />

                        <label htmlFor="mileage">Mileage</label>
                        <input type="number" name="mileage" id="mileage" value={vehicle.mileage} onChange={handleChange} />

                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" id="location" value={vehicle.location} onChange={handleChange} />

                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" id="description" value={vehicle.description} onChange={handleChange} />

                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="price" value={vehicle.price} onChange={handleChange} />

                        <label htmlFor="imgSrc">Image Path</label>
                        <input type="text" name="imgSrc" id="imgSrc" value={vehicle.imgSrc} onChange={handleChange} />

                        <button type="submit" name="addVehicle">Add Vehicle</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AddVehicle;
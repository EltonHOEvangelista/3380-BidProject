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

  const [fileName, setFileName] = useState('Choose File');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setVehicle(prevState => ({
        ...prevState,
        imgSrc: reader.result
      }));
      setFileName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
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
        setFileName('Choose File');
      })
      .catch(error => {
        console.error('There was an error adding the item!', error);
      });
  };

  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div class="bg-white shadow-xl rounded-2xl p-12 w-full max-w-5xl">
        <h2 class="text-4xl font-bold text-blue-950 mb-10 text-center">Vehicle Details</h2>
        <form class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="flex flex-col">
            <label for="vin" class="text-base font-medium text-gray-600">VIN</label>
            <input
              type="text"
              name="vin"
              id="vin"
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter VIN"
            />
          </div>

          <div class="flex flex-col">
            <label for="title" class="text-base font-medium text-gray-600">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Title"
            />
          </div>

          <div class="flex flex-col">
            <label for="maker" class="text-base font-medium text-gray-600">Maker</label>
            <input
              type="text"
              name="maker"
              id="maker"
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Maker"
            />
          </div>

          <div class="flex flex-col">
            <label for="model" class="text-base font-medium text-gray-600">Model</label>
            <input
              type="text"
              name="model"
              id="model"
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Model"
            />
          </div>

          <div class="flex flex-col">
            <label for="year" class="text-base font-medium text-gray-600">Year</label>
            <input
              type="number"
              name="year"
              id="year"
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Year"
            />
          </div>

          <div class="flex flex-col">
            <label for="color" class="text-base font-medium text-gray-600">Color</label>
            <input
              type="text"
              name="color"
              id="color"
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Color"
            />
          </div>

          <div class="flex flex-col">
            <label for="engineType" class="text-base font-medium text-gray-600">Engine Type</label>
            <input
              type="text"
              name="engineType"
              id="engineType"
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Engine Type"
            />
          </div>

          <div class="flex flex-col">
            <label for="transmission" class="text-base font-medium text-gray-600">Transmission</label>
            <input
              type="text"
              name="transmission"
              id="transmission"
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Transmission"
            />
          </div>

          <div class="flex flex-col">
            <label for="mileage" class="text-base font-medium text-gray-600">Mileage</label>
            <input
              type="number"
              name="mileage"
              id="mileage"
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Mileage"
            />
          </div>

          <div class="flex flex-col">
            <label for="location" class="text-base font-medium text-gray-600">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Location"
            />
          </div>

          <div class="flex flex-col">
            <label for="price" class="text-base font-medium text-gray-600">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Price"
            />
          </div>

          <div class="flex flex-col">
            <label for="imgSrc" class="text-base font-medium text-gray-600">{fileName}</label>
            <input
              type="file"
              name="imgSrc"
              id="imgSrc"
              onChange={handleFileChange}
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter Image Path"
            />
          </div>
          <div class="flex flex-col lg:col-span-3">
            <label for="description" class="text-base font-medium text-gray-600">Description</label>
            <textarea
              name="description"
              id="description"
              class="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              placeholder="Enter Description"
            ></textarea>
          </div>

          <div class="flex justify-center md:col-span-2 lg:col-span-3">
            <button
              type="submit"
              name="addVehicle"
              class="bg-blue-950 hover:bg-blue-900 text-white font-semibold py-4 px-10 rounded-md shadow-md transition duration-300"
            >
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;
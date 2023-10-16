
import React, { useState, useEffect } from 'react';

import Rooms from './Rooms';
import axios from 'axios'
const Hotel = () => {
  const [hotels, setHotels] = useState([{ hotel_id: 1, hotel_name: "Loading...", room_price: "", room_class: "" }]);
  console.log(hotels)

  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/hotels')
    setHotels(response.data)
  }
  useEffect(() => {
    fetchData();
  }, []);

  var displayHotels = [];
  hotels.forEach((item, index) => {
    displayHotels.push(<Rooms
      id={item.hotel_id}
      name={item.hotel_name}

      roomPrice={item.room_price}
      roomClass={item.room_class}
      roomDescrip={item.room_description}
      roomVacancy={item.rooms_vacancy}

    />)
  });


  return (
    <div>
      <h1 style={{textAlign:"center"}}>Room Booking</h1>
      <div className="row">
        <div style={{display:"flex", flexDirection:"column"}}>
          {displayHotels}
        </div>

      </div>


    </div>
  )

}








export default Hotel;

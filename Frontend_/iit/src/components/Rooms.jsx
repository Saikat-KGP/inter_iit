// import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../components/Rooms.css';
import pic from "../images/hotel_room.jpg";

function Rooms({ id, name, roomPrice, roomClass, roomDescrip, roomVacancy }) {
  // const [hotels, setHotels] = useState([]);
  const handleClick = async () => {
    const response = await axios.post('http://localhost:5000/update'
      , {
        hotel_id: id  ,
        vacancy: parseInt(roomVacancy, 10) - 1
      });



    if (response.data) {
      if (response.data.message) {
        alert("Room Booked")
      }
      else {
        alert("Room Booking failed")
      }
      alert("Kindly Refresh");
    }
  }

  return (
    <div>
      <div key={id} className=" my-3 ">
        <div className="card" >
          <img className="card-img-top" src={pic} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title"><strong>Hotel Name:</strong> {name}</h5>
            <p className="card-text"><strong>Description:</strong> {roomDescrip}</p>
            <p  className="card-text"><strong>Room Price:</strong> {roomPrice}</p>
            <p  className="card-text"><strong>Room class: </strong>{roomClass}</p>
            <p  className="card-text"><strong>Room Vacancies:</strong>{roomVacancy}</p>
            <button onClick={() => { handleClick() }}>
              BOOK
            </button>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Rooms;

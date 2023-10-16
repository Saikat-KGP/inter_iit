// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  port: "3306",
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'hotel_management',
});

app.get('/hotels', (req, res) => {
  // res.send([{ hotel_id: 1, hotel_name: 2, room_price: 3, room_class: 4 },
  // { hotel_id: 1, hotel_name: 2, room_price: 3, room_class: 4 },
  // { hotel_id: 1, hotel_name: 2, room_price: 3, room_class: 4 },
  // { hotel_id: 1, hotel_name: 2, room_price: 3, room_class: 4 }])
  connection.query('SELECT * FROM hotel_management.hotels', (err, result) => {
    if (err) {
      console.log(err)
      res.send({ error: err });
    }
    // console.log(result)
    res.send(result);
  });
});

app.post('/update', (req, res) => {
  const hotel_id = req.body.hotel_id;
  const vacancy=req.body.vacancy;
  console.log(hotel_id, vacancy)
  // console.log("bye bye");
  // console.log(id, vacancy)
  connection.query(`UPDATE hotel_management.hotels SET rooms_vacancy = "${vacancy}" WHERE (hotel_id = "${hotel_id}");`, (err, result) => {
    if (err) {
      console.log(err)
      res.send({ error: err, message:false });
    }
    res.send({ message: true });
  })



})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

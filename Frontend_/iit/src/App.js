// import logo from './logo.svg';
import './App.css';
import BookingPage from './BookingPage';
import MainPage from './MainPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/hotels' element={<BookingPage />} />
        </Routes>
      </Router>               
    </div>
  );
}

export default App;

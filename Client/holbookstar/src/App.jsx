import './App.css';
import React from 'react';
//Navigation bar
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContentPage from './pages/contentPage';
import HomePage from './pages/HomePage';
import Navbar from './Components/Navbar'
// import { Container } from 'react-bootstrap';
// Can add this in future
// Container(contentProps) {
//   super(contentProps);
//   this.state = {
//     title:"Be prepare for greatest holiday you ever will have",
//     Headerlinks: {
//       {title: 'Home', path: '/'},

//     }



//   }

function App() {
  return (<div className="App">
    <Router>
      <Navbar />
      <Routes>
          <Route index element={<HomePage />} />
          <Route path='content' element={<ContentPage />} />
        </Routes>
      </Router> 
      </div>
  );
}

export default App;

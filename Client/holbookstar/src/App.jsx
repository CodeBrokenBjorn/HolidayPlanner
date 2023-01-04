import './App.css';
import React, {useState} from 'react';
//Navigation bar
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContentPage from './pages/ContentPage';
import HomePage from './pages/HomePage';
import SearchHolBar from './pages/SearchHolBar';
import ContactPage from './pages/ContactPage';
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
  const [user, setUser] = useState({username: 'lorem lipsum'});

  return (<div className="App">
    <Router>
      <Navbar />
      <Routes>
          <Route index element={<HomePage />} />
          <Route path='Search' element={<SearchHolBar />} />
          <Route path='content' element={<ContentPage />} />
          <Route path='ContactPage' element={<ContactPage/> } />
        </Routes>
      </Router> 
      </div>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';
//Navigation bar
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContentPage from './pages/ContentPage';
import HomePage from './pages/HomePage';
import SearchHolBar from './pages/SearchHolBar';
import ContactPage from './pages/ContactPage';
import CallenderPage from './pages/CallenderPage';
import Navbar from './Components/Navbar'


function App() {
  const [user, setUser] = useState({username: 'lorem lipsum'});

  return (<div className="App">
    <Router>
      <Navbar />
      <Routes>
          <Route index element={<HomePage />} />
          <Route path='Search' element={<SearchHolBar />} />
          <Route path='content' element={<ContentPage />} />
          <Route path='Callender' element={<CallenderPage />} />
          <Route path='ContactPage' element={<ContactPage/>} />
        </Routes>
      </Router> 
      </div>
  );
}

export default App;

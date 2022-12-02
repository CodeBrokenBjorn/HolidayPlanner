import './App.css';
//Navigation bar
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavigationBar from './Components/navigation/NavigationBar';

function App() {
  return (
    <>
   
      
     <Router>
     <div className='App'>
        <NavigationBar />

          <Routes>

            <Route path ='/' exact component={HomePage} />
        
          </Routes>
         
        </div>
      </Router>
     
    </>
  );
}

export default App;

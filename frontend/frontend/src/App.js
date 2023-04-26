import logo from './logo.svg';
import './App.css';

// Use latest version of react-router-dom
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

// Import all the components
import Home from './Home';
import Login from './Login';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>          
    </>
  );
}

export default App;

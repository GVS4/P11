import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import PrivateRoute from './components/PrivateRoute';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
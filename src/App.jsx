import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Causes from './pages/Causes';
import Impact from './pages/Impact';
import Solutions from './pages/Solutions';
import './index.css';

export default function App() {
  return (
    <Router>
      <nav className="main-nav">
        {['Home', 'History', 'Causes', 'Impact', 'Solutions'].map(page => (
          <NavLink
            key={page}
            to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            {page}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>

      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} Wildfire Awareness. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Donate</a>
        </div>
      </footer>
    </Router>
  );
}

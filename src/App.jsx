import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Causes from './pages/Causes';
import Impact from './pages/Impact';
import Solutions from './pages/Solutions';
import Work_Cited from './pages/Work_Cited';
import Links from './pages/Links';
import './index.css';

export default function App() {
  return (
    <Router>
      <nav className="main-nav">
        {[
          { name: 'Home', path: '/' },
          { name: 'History', path: '/history' },
          { name: 'Causes', path: '/causes' },
          { name: 'Impact', path: '/impact' },
          { name: 'Solutions', path: '/solutions' },
          { name: 'Links', path: '/links'},
          { name: 'Work Cited', path: '/work-cited' } 
        ].map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            {name}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/links" element={<Links/>} />
        <Route path="/work-cited" element={<Work_Cited />} />
      </Routes>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} California Wildfire Crisis. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/MataioN/ESPM-Website" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </Router>
  );
}

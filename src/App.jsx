import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Causes from './pages/Causes';
import Impact from './pages/Impact';
import Solutions from './pages/Solutions';
import './App.css'; // Import the CSS file

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 text-gray-800 font-sans">
        <header className="bg-gradient-to-r from-orange-800 to-red-600 text-white py-6 px-4 shadow-lg">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Wildfire Crisis Awareness</h1>
          </div>
        </header>
        
        <div className="container mx-auto px-4">
          <TabNavigation />
          
          <main className="bg-white rounded-b-xl shadow-lg p-6 md:p-8 mb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/causes" element={<Causes />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/solutions" element={<Solutions />} />
            </Routes>
          </main>
        </div>
        
        <footer className="bg-orange-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-4">&copy; {new Date().getFullYear()} Wildfire Crisis Awareness Initiative</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-orange-200 hover:text-white transition-colors">About Us</a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Resources</a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Emergency Information</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function TabNavigation() {
  const tabs = [
    { path: "/", label: "Home" },
    { path: "/history", label: "History" },
    { path: "/causes", label: "Causes" },
    { path: "/impact", label: "Impact" },
    { path: "/solutions", label: "Solutions" }
  ];
  
  return (
    <div className="tab-container mt-6">
      <nav className="tab-navigation">
        <ul className="flex">
          {tabs.map((tab, index) => (
            <TabLink 
              key={index} 
              to={tab.path} 
              label={tab.label} 
              isFirst={index === 0}
              isLast={index === tabs.length - 1}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

function TabLink({ to, label, isFirst, isLast }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  let tabClasses = "tab-item relative block py-3 px-6 font-medium transition-all";
  
  // Apply specific classes for tab appearance
  if (isActive) {
    tabClasses += " active-tab bg-white text-orange-700 border-t-2 border-l border-r border-gray-200 rounded-t-lg z-10";
  } else {
    tabClasses += " inactive-tab bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200";
  }
  
  // Apply position-specific classes
  if (isFirst) {
    tabClasses += " ml-2";
  }
  
  if (isLast) {
    tabClasses += " mr-2";
  }
  
  return (
    <li className="tab-list-item">
      <Link to={to} className={tabClasses}>
        {label}
      </Link>
    </li>
  );
}
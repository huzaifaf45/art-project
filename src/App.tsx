import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Palette, Theater, BookOpen, Home } from 'lucide-react';
import HomePage from './pages/HomePage';
import ArtPage from './pages/ArtPage';
import DramaPage from './pages/DramaPage';
import ReferencesPage from './pages/ReferencesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-teal-600 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Link to="/" className="flex items-center space-x-2 hover:text-teal-200">
                  <Home size={24} />
                  <span className="font-semibold">Home</span>
                </Link>
                <Link to="/art" className="flex items-center space-x-2 hover:text-teal-200">
                  <Palette size={24} />
                  <span>Art</span>
                </Link>
                <Link to="/drama" className="flex items-center space-x-2 hover:text-teal-200">
                  <Theater size={24} />
                  <span>Drama</span>
                </Link>
                <Link to="/references" className="flex items-center space-x-2 hover:text-teal-200">
                  <BookOpen size={24} />
                  <span>References</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/art" element={<ArtPage />} />
            <Route path="/drama" element={<DramaPage />} />
            <Route path="/references" element={<ReferencesPage />} />
          </Routes>
        </main>

        <footer className="bg-teal-700 text-white py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center">© 2024 Facilitating Creativity in the Curriculum</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
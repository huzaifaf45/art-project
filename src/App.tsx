import { BookOpen, Home, Palette, Theater } from "lucide-react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ArtPage from "./pages/ArtPage";
import DramaPage from "./pages/DramaPage";
import HomePage from "./pages/HomePage";
import ReferencesPage from "./pages/ReferencesPage";
import MusicAndMovementPage from "./pages/MusicAndMovementPage";
import LanguageAndLiteracyPage from "./pages/LanguageAndLiteracyPage";
import SciencePage from "./pages/SciencePage";
import EngineeringPage from "./pages/EngineeringPage";
import MathematicsPage from "./pages/MathematicsPage";
import TechnologyPage from "./pages/TechnologyPage";
import HumanitiesPage from "./pages/HumanitiesPage";
import IntegratedCurriculumPage from "./pages/IntegratedCurriculumPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-teal-600 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Link
                  to="/"
                  className="flex items-center space-x-2 hover:text-teal-200"
                >
                  <Home size={24} />
                  <span className="font-semibold">Home</span>
                </Link>
                <Link
                  to="/art"
                  className="flex items-center space-x-2 hover:text-teal-200"
                >
                  <Palette size={24} />
                  <span>Art</span>
                </Link>
                <Link
                  to="/drama"
                  className="flex items-center space-x-2 hover:text-teal-200"
                >
                  <Theater size={24} />
                  <span>Drama</span>
                </Link>
                <Link
                  to="/references"
                  className="flex items-center space-x-2 hover:text-teal-200"
                >
                  <BookOpen size={24} />
                  <span>References</span>
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-2 hover:text-teal-200 focus:outline-none">
                    <span className="font-semibold">More Topics</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-56 bg-white text-teal-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
                    <Link
                      to="/music-and-movement"
                      className="block px-6 py-3 hover:bg-teal-100"
                    >
                      Music and Movement
                    </Link>
                    <Link
                      to="/language-and-literacy"
                      className="block px-6 py-3 hover:bg-teal-100"
                    >
                      Language and Literacy
                    </Link>
                    <Link
                      to="/science"
                      className="block px-6 py-3 hover:bg-teal-100"
                    >
                      Science
                    </Link>
                    <Link
                      to="/engineering"
                      className="block px-6 py-3 hover:bg-teal-100"
                    >
                      Engineering
                    </Link>
                    <Link
                      to="/mathematics"
                      className="block px-6 py-3 hover:bg-teal-100"
                    >
                      Mathematics
                    </Link>
                    <Link
                      to="/technology"
                      className="block px-6 py-3 hover:bg-teal-100"
                    >
                      Technology
                    </Link>
                    <Link
                      to="/humanities"
                      className="block px-6 py-3 hover:bg-teal-100"
                    >
                      Humanities
                    </Link>
                    <Link
                      to="/integrated-curriculum"
                      className="block px-6 py-3 hover:bg-teal-100"
                    >
                      Integrated Curriculum
                    </Link>
                  </div>
                </div>
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
            <Route
              path="/music-and-movement"
              element={<MusicAndMovementPage />}
            />
            <Route
              path="/language-and-literacy"
              element={<LanguageAndLiteracyPage />}
            />
            <Route path="/science" element={<SciencePage />} />
            <Route path="/engineering" element={<EngineeringPage />} />
            <Route path="/mathematics" element={<MathematicsPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/humanities" element={<HumanitiesPage />} />
            <Route
              path="/integrated-curriculum"
              element={<IntegratedCurriculumPage />}
            />
          </Routes>
        </main>

        <footer className="bg-teal-700 text-white py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center">
              © 2024 Facilitating Creativity in the Curriculum
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

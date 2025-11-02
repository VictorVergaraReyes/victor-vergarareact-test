import { Routes, Route, Link, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App(): React.JSX.Element {
  return (
    <HashRouter>
      <nav className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="flex gap-4">
          <Link to="/" className="hover:text-blue-200 transition-colors">
            Inicio
          </Link>
          <Link to="/login" className="hover:text-blue-200 transition-colors">
            Login
          </Link>
        </div>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

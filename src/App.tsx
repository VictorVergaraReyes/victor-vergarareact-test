import { Routes, Route, Link, HashRouter } from 'react-router-dom';
import Home from './pages/Home';

function App(): React.JSX.Element {
  return (
    <HashRouter>
      <nav className="bg-blue-600 text-white p-4 shadow-lg">
        <Link to="/" className="hover:text-blue-200 transition-colors">
          Inicio
        </Link>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

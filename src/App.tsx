import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';

function App(): React.JSX.Element {
  return (
     <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

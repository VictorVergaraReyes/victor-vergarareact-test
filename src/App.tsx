import { Routes, Route, Link, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { Products } from './pages/Products';
import {CreateProductPage} from './pages/Create-product';
import Characters from './pages/Rick-morty';
import Upload from './pages/Upload';
import NotFound from './pages/NotFound';
import { PrivateRoute } from './components/PrivateRoute';
import { Toaster } from '@/components/ui/sonner';

function App(): React.JSX.Element {
  return (
    <HashRouter>
      <Toaster />
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
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-product"
          element={
            <PrivateRoute>
              <CreateProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/rick-morty"
          element={
            <PrivateRoute>
              <Characters />
            </PrivateRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <PrivateRoute>
              <Upload />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

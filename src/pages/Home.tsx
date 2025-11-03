import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Upload as UploadIcon, LogOut, Users, PlusCircle } from 'lucide-react';
import { useAuthStore } from '@/stores/loginStore';
import { Button } from '@/components/ui/button';

interface MenuCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const MenuCard = ({ title, description, icon, onClick }: MenuCardProps): React.JSX.Element => {
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 active:scale-95"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
            {icon}
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const Home = (): React.JSX.Element => {
  const navigate = useNavigate();
  const { logout, user } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    {
      title: 'Productos',
      description: 'Ver y gestionar el catálogo de productos',
      icon: <Package size={28} />,
      path: '/products',
    },
    {
      title: 'Crear Producto',
      description: 'Agregar un nuevo producto al catálogo',
      icon: <PlusCircle size={28} />,
      path: '/create-product',
    },
    {
      title: 'Rick and Morty',
      description: 'Explorar personajes de Rick and Morty',
      icon: <Users size={28} />,
      path: '/rick-morty',
    },
    {
      title: 'Subir Archivos',
      description: 'Cargar y administrar archivos',
      icon: <UploadIcon size={28} />,
      path: '/upload',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Bienvenido
            </h1>
            {user && (
              <p className="text-gray-600">
                {user.email}
              </p>
            )}
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut size={18} />
            Cerrar Sesión
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <MenuCard
              key={item.path}
              title={item.title}
              description={item.description}
              icon={item.icon}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

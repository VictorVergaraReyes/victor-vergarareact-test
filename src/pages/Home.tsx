const Home = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Bienvenido a la página de inicio
        </h1>
        <p className="text-gray-600">
          Tailwind CSS está configurado correctamente 🎨
        </p>
      </div>
    </div>
  );
};

export default Home;
import ProductList from "@/components/products/productList";

export const Products = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Productos
          </h1>
          <p className="text-muted-foreground mt-2">
            Explora nuestro catálogo de productos
          </p>
        </div>
      </header>

      <main>
        <ProductList />
      </main>
    </div>
  );
}
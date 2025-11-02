import ProductCard from "@/components/product-card";

export const Products = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <ProductCard />
    </div>
  );
}
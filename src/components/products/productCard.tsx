import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/productTypes";
import ProductDialog from "./productDialog";

function ProductCard({ product }: { product: Product }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "electronics": "bg-blue-500",
      "jewelery": "bg-purple-500",
      "men's clothing": "bg-green-500",
      "women's clothing": "bg-pink-500",
    };
    return colors[category.toLowerCase()] || "bg-gray-500";
  };

  return (
    <Card className="w-full flex flex-col h-full">
      <CardHeader>
        <div className="flex flex-col gap-3">
          <div className="w-full h-40 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full max-h-full object-contain p-2"
            />
          </div>
          <div className="flex-1">
            <CardTitle className="text-base line-clamp-2">{product.title}</CardTitle>
            <CardDescription className="mt-1">
              <Badge className={getCategoryColor(product.category)}>
                {product.category}
              </Badge>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {product.description}
          </p>
          <p className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={() => setDialogOpen(true)}>
          Ver detalles
        </Button>
      </CardFooter>

      <ProductDialog
        product={product}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </Card>
  );
}

export default ProductCard;

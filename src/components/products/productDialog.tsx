import { Product } from '@/types/productTypes';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProductDialogProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function ProductDialog({ product, open, onOpenChange }: ProductDialogProps) {
  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      "electronics": "bg-blue-500 hover:bg-blue-600",
      "jewelery": "bg-purple-500 hover:bg-purple-600",
      "men's clothing": "bg-green-500 hover:bg-green-600",
      "women's clothing": "bg-pink-500 hover:bg-pink-600",
    };
    return colors[category.toLowerCase()] || "bg-gray-500 hover:bg-gray-600";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-start gap-6">
            <div className="w-48 h-48 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-full object-contain p-4"
              />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{product.title}</DialogTitle>
              <DialogDescription className="text-base">
                <Badge className={getCategoryColor(product.category)}>
                  {product.category}
                </Badge>
              </DialogDescription>
              <div className="mt-4">
                <p className="text-3xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>

        <Separator />

        <ScrollArea className="max-h-[50vh]">
          <div className="space-y-6 pr-4">
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                DESCRIPCIÓN
              </h3>
              <p className="text-foreground leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                ID DEL PRODUCTO
              </h3>
              <p className="text-foreground">{product.id}</p>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                CATEGORÍA
              </h3>
              <p className="text-foreground capitalize">{product.category}</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDialog;

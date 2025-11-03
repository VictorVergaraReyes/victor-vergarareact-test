import ProductForm from "@/components/products/productForm";
import type { FC } from "react";
interface CreateProductPageProps {}

export const CreateProductPage: FC<CreateProductPageProps> = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6">Crear Nuevo Producto</h1>
            <ProductForm />
        </div>
    );
}
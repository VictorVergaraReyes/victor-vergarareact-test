import ProductForm from "@/components/products/productForm";
import type { FC } from "react";
interface CreateProductPageProps {}

export const CreateProductPage: FC<CreateProductPageProps> = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <ProductForm />
        </div>
    );
}
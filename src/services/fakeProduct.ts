import { Product } from '@/types/productTypes';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error('Error fetching products');
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const createProduct = async (product: {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}): Promise<Product> => {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });

    if (!response.ok) {
      throw new Error('Error creating product');
    }

    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

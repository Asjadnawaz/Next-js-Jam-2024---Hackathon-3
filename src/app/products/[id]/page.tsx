'use client';

import { useParams } from 'next/navigation';
import { products } from '../../components/BestProducts'; // Adjust the import path as needed
import ProductDetails from '../../components/ProductDetails';

const ProductPage = () => {
  const { id } = useParams(); // Extract the dynamic route parameter

  // Log the ID for debugging
  console.log('Product ID:', id);

  if (!id) {
    return <div>No ID provided</div>; // Handle case where no ID is provided
  }

  // Convert `id` to a number for comparison with product IDs
  const product = products.find((product: any) => product.id === parseInt(id, 10));
  
  console.log('Product:', product); // Log the product for debugging

  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <ProductDetails
      title={product.title}
      price={product.price}
      originalPrice={product.originalPrice}
      imageUrl={product.imageUrl}
      department={product.department}
      productColors={product.productColors}
    />
  );
};

export default ProductPage;

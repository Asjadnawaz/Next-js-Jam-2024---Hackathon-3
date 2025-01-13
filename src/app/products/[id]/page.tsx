'use client';

import { useSearchParams } from 'next/navigation';
import { products } from '../../components/BestProducts'; // Adjust the import path as needed
import FloatingPage2 from '../../components/FloatingPage2';

const ProductPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  // Log the id to debug
  console.log('Product ID:', id);
  
  if (!id) {
    return <div>No ID provided</div>; // Handle case where no ID is provided
  }

  // Assuming that `id` is a string in the URL, make sure we handle the comparison correctly
  const product = products.find((product: any) => product.id === parseInt(id as string));
  
  console.log('Product:', product); // Check if the product is found
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <FloatingPage2
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

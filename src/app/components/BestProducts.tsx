'use client';

import ProductCard from "./ProductCards";

export const products = [
  {
    id: 1,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id1.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 2,
    title: 'Graphic Design',
    price:'$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id2.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 3,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id3.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 4,
    title: 'Graphic Design',
    price:'$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id4.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 5,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id5.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 6,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id6.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 7,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id7.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 8,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id8.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
];

export default function BestProduct() {
  return (
    <div className="text-center mx-auto px-4 py-12">
      <br /><br /><br />
      <h4 className="text-[16px] md:text-[20px] font-bold mb-4 text-[#737373]">Featured Products</h4>
      <h3 className="font-[700] text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-[0.1px] text-center text-[#252B42] mb-4">BEST SELLER PRODUCTS</h3>
      <p className="mt-[-10px] mb-8 text-[#737373] text-[14px] md:text-[16px]">Problems trying to resolve the conflict between </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            department={product.department}
            price={product.price}
            originalPrice={product.originalPrice}
            imageUrl={product.imageUrl}
            productColors={product.productColors}
           
            
          /> 
        ))}
      </div>
    </div>
  );
}

// API route handler
export async function GET(request: Request) {
  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
  });
}


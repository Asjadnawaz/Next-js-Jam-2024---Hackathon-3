'use client'; // Ensures this component is rendered on the client side

import { useEffect } from 'react';
import Image from 'next/image';

interface FloatingPage2Props {
  title: string;
  department: string;
  originalPrice: string;
  price: string;
  imageUrl: string;
  productColors: string;
}

const FloatingPage2 = ({ title, department, originalPrice, price, imageUrl, productColors }: FloatingPage2Props) => {
  useEffect(() => {
    const colorButtons = document.querySelectorAll('.color-btn');

    const handleColorSelection = (e: Event) => {
      if (e.target && (e.target as HTMLElement).classList.contains('color-btn')) {
        colorButtons.forEach((btn) => btn.classList.remove('border-blue-500'));
        (e.target as HTMLElement).classList.add('border-blue-500');
      }
    };

    colorButtons.forEach((button) => {
      button.addEventListener('click', handleColorSelection);
    });

    return () => {
      colorButtons.forEach((button) => {
        button.removeEventListener('click', handleColorSelection);
      });
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={500}
        className="rounded-lg shadow-md"
      />
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-gray-100 p-2 rounded-b-lg">
        <span className="text-xs font-bold">{title}</span>
        <div className="flex gap-2">
          <button className="bg-white border-2 border-gray-400 px-2 py-1 rounded-lg color-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="bg-white border-2 border-gray-400 px-2 py-1 rounded-lg color-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{department}</p>
        <p>{price}</p>
        <p>{originalPrice}</p>
      </div>
    </div>
  );
};

export default FloatingPage2;
import React from 'react';
import Image from 'next/image';

const ShopCard = () => {
  return (
    <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold ${montserrat.className} text-[#252B42] text-[14px ] mt-4 mb-4">Shop</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Item 1 */}
        <div className="bg-white  overflow-hidden">
          <Image src="/images/Product1.png" alt="Product 1" width={192} height={192} className="w-48 h-48 mr-[50px] object-cover" />
          <div className="p-4">
           
          </div>
        </div>
        {/* Item 2 */}
        <div className="bg-white  overflow-hidden">
          <Image src="/images/Product2.png" alt="Product 2" width={192} height={192} className="w-48 h-48 object-cover" />
          <div className="p-4">
           
          </div>
        </div>
        {/* Item 3 */}
        <div className="bg-white  overflow-hidden">
          <Image src="/images/Product3.png" alt="Product 3" width={192} height={192} className="w-48 h-48 object-cover" />
          <div className="p-4">
           
          </div>
        </div>
        {/* Item 4 */}
        <div className="bg-white  overflow-hidden">
          <Image src="/images/Product4.png" alt="Product 4" width={192} height={192} className="w-48 h-48 object-cover" />
          <div className="p-4">
           
          </div>
        </div>
        {/* Item 5 */}
        <div className="bg-white  overflow-hidden">
          <Image src="/images/Product5.png" alt="Product 5" width={192} height={192} className="w-48 h-48 mr-[-300px] object-cover" />
          <div className="p-4">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;

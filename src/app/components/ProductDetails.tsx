import Image from 'next/image';

export default function ProductDetails({ title, price, originalPrice, imageUrl, department, productColors } :any) {
  return (
    <div className="mx-auto">
      <div className='h-[92px]  bg-[#FAFAFA] w-full place-content-center'>

    <div className='container mx-[55px] h-[44px] place-content-center'>
        <div className='flex flex-row text-center gap-[15px]'>
          <h1 className='font-[700] text-[14px] text-[#252B42]'>Home</h1>
          <i className="bi bi-chevron-right justify-self-center text-[14px] text-[#BDBDBD]"></i>
          <h1 className='font-[700] text-[14px] text-[#BDBDBD]'>Shop</h1>
        </div>
      </div>
    </div>

    <div className=' container h-[598px] bg-[#FAFAFA] border-2 border-black'>
      <div className='container mx-[55px] h-[598px] border-2 border-blue-700 overflow-y-hidden'>
        <div className='flex  overflow-y-hidden gap-[50px]'>
        <Image
            src={imageUrl}
            alt={title}
            width={506}
            height={546}
            className='rounded-sm h-[full] w-[506px]'

        />
            <div className="w-[530px] h-[471px] px-[15px] py-[15px] border-2 border-orange-400 place-content-right">
            <div className='w-[500px] h-[441px] border-2 border-purple-700 flex flex-col gap-[20px]'>
              <div className='flex flex-col gap-[12px]'>
                <h1 className='font-[400] text-[20px]'>{title}</h1>
                <Image
                  src={'/images/Reviews.png'}
                  alt="Reviews"
                  width={221}
                  height={24}

                />

              </div>
              <div className='flex flex-col gap-[32px]'>
              <div className='flex flex-col gap-[5px]'>
                <h1 className='font-[700] text-[24px]'>{originalPrice}</h1>
                <p className='text-[#737373] font-[700] text-[14px]'>Avaibility&nbsp;: <span className='text-[#23A6F0]'>In Stock</span></p>
              </div>
              <div>
                <div className='flex flex-col gap-[29px]'>
                 <h1 className='font-[400] text-[14px] text-[#858585] pb-[27px] border-b-[1px] border-[#BDBDBD] '>Met minim Mollie non desert Alamo est sit cliquey dolor 
                      do met sent. RELIT official consequent door ENIM RELIT Mollie.<br /> 
                      Excitation venial consequent sent nostrum met.</h1>

                    <div className='flex flex-col gap-[67px]'>
                  <div className='flex flex-row gap-[10px]'>
                  <i className="bi bi-circle-fill text-[#23A6F0] h-[30px] w-[30px] text-[30px]"></i>
                  <i className="bi bi-circle-fill text-[#2DC071] h-[30px] w-[30px] text-[30px]"></i>
                  <i className="bi bi-circle-fill text-[#E77C40] h-[30px] w-[30px] text-[30px]"></i>
                  <i className="bi bi-circle-fill text-[#252B42] h-[30px] w-[30px] text-[30px]"></i>
                  </div>
                  <div className='flex flex-row gap-[10px]'>
                    <div className='bg-[#23A6F0] w-[148px] h-[44px] flex items-center justify-center rounded-[5px] cursor-pointer'>
                      <h1 className='text-white text-[14px] font-[700]'>Select Option</h1>
                    </div>
                    <div className=''>
                    <i className="bi bi-circle-fill text-white"></i>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              </div>
           </div>

            </div>
        </div>
      </div>
    </div>
      
     </div>
  );
}

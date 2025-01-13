import Image from 'next/image'

export default function Vedio() {
  return (
    <div className="flex justify-center items-center mb-[50px]  w-[800px] h-[280px] mr-[250px] ml-[250px] h-screen bg-gray-100">
      <div className="relative w-96 h-54">
        <Image
          src="/images/vediocard.png"
          alt="Mountain lake with reflection"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-500 flex justify-center items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-play"
          >
            <path d="M5 3l14 9-14 9v-18z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

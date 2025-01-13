import Image from 'next/image';

export default function Logo() {
  return (
    <div className="bg-[#FAFAFA] pl-[200px] p-4 px-[500px] items-center">
      <div className="flex gap-8">
        <Image
          src="/images/hooli.png"
          alt="hoolie"
          width={153}
          height={34}
        />
        <Image
          src="/images/lyft.png"
          alt="lyft"
          width={146}
          height={59}
        />
        <Image
          src="/images/pen.png"
          alt="pen"
          width={152}
          height={75}
        />
        <Image
          src="/images/stripe.png"
          alt="stripe"
          width={151}
          height={42}
        />
        <Image
          src="/images/aws.png"
          alt="aws"
          width={151}
          height={62}
        />
        <Image
          src="/images/reddit.png"
          alt="reddit"
          width={151}
          height={72}
        />
      </div>
    </div>
  );
}
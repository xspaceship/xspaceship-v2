import Image from 'next/image';
import QR from 'public/images/coaching/qr.png';
import Venmo from 'public/images/coaching/venmo.png';

const Step03 = () => {
  return (
    <div className="p-8 text-center flex flex-col items-center">
      <p className="text-tc04 mb-8">
        Pay with Venmo to confirm the appointment:
      </p>
      <p className="text-tc04 mb-2">@tpham01</p>
      <div className="m-5 w-[200px]">
        <Image src={QR} />
      </div>
      <div className="w-[120px]">
        <Image src={Venmo} />
      </div>
    </div>
  );
};

export default Step03;

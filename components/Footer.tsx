import Image from 'next/image';
import logof from '@/image/logof.jpg';
import newslogo from '@/image/newslogo.jpg';

function Footer() {
  return (
    <div className="flex-1 w-full flex flex-col gap-30 items-center place-content-end">
      <div>
        <div>
          <Image
            src={logof}
            alt="Logof"
            className="logof"
            width={200}
            height={100}
          />
        </div>
        <div>
          <Image
            src={newslogo}
            alt="newslogo"
            className="newslogo"
            width={200}
            height={100}
          />
        </div>
      </div>
      <h1>&copy; {new Date().getFullYear()} All rights reserved</h1>
    </div>
  );
}

export default Footer;


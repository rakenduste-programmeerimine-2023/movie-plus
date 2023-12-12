import Image from 'next/image';
import ogg from '@/image/ogg.jpg';
import Link from 'next/link';

const HeaderComponent: React.FC = () => {
  return (
    <Link href="http://localhost:3000/">
      <div className="logo cursor-pointer">
        <Image src={ogg} alt="Logo" width={300} height={300} />
      </div>
    </Link>
  );
};

export default HeaderComponent;

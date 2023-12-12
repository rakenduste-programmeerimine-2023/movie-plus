import Image from 'next/image';
import minuLogo from '@/image/ogg.jpg';
import Link from 'next/dist/client/link';

const Header: React.FC = () => {
  return (
    <Link href="http://localhost:3001/">
      <div className="logo">
      <Image src={minuLogo} alt="Logo" width={300} height={300} className="absolute top-0 right-0"/>  
      </div>
    </Link>
  );
};
export default Header;


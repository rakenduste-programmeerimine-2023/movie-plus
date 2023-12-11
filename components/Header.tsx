import Image from 'next/image';
import minuLogo from '@/components/image/ogg.jpg';n

const Header: React.FC = () => {
  return (
    <div className="logo">
      <Image src={minuLogo} alt="Logo" width={300} height={300} className="absolute top-0 right-0"/>
    </div>
  );
};
export default Header;
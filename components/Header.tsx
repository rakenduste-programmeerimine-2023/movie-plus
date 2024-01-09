import Image from 'next/image';
import ogg from '@/image/ogg.jpg';
import Link from 'next/link';
import Search from '@/components/Search';

const Header: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center',  color: 'black'}}>
      <div style={{ marginRight: '200px' }}>
        <Search />
      </div>
      <Link href="http://localhost:3000/">
        <div className="logo cursor-pointer">
          <Image src={ogg} alt="Logo" width={300} height={300} />
        </div>
      </Link>
    </div>
    )
}

export default Header;

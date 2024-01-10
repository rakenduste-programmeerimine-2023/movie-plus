import Image from 'next/image';
import logo from '@/image/logo.jpg';


const Header: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center',  color: 'black'}}>
      <div style={{ marginRight: '200px' }}>
      </div>
        <div className="logo cursor-pointer">
          <Image src={logo} alt="Logo" width={300} height={300} />
        </div>
    </div>
    )
}

export default Header;
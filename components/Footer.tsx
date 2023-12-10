import Image from 'next/image';
import logof from '@/components/image/logof.jpg';

function Footer() {
  return (
    <div className="flex-1 w-full flex flex-col gap-30 items-left place-content-end">
      <h1>© {new Date().getFullYear()} All rights reserved</h1>
      <div className="logof-container" style={{ position: 'relative' }}>
        <Image
          src={logof}
          alt="Logof"
          className="logof"
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            width: '300px',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}

export default Footer;
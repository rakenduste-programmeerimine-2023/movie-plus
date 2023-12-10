import Image from 'next/image';
import logof from '@/components/image/logof.jpg';
import newslogo from '@/components/image/newslogo.jpg';
function Footer() {
    return (
      <div className="flex-1 w-full flex flex-col gap-30 items-left place-content-end">
        <h1>© {new Date().getFullYear()} All rights reserved</h1>
        <div className="logof-newslogo-container" style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ position: 'relative', marginRight: '20px' }}>
            <Image
              src={newslogo}
              alt="newslogo"
              className="newslogo"
              style={{
                width: '300px',
                height: 'auto',
              }}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <Image
              src={logof}
              alt="Logof"
              className="logof"
              style={{
                width: '300px',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  
  
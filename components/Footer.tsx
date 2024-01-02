import Image from 'next/image';
import logof from '@/image/logof.jpg';
import newslogo from '@/image/newslogo.jpg';
import Link from 'next/link';
import kolmastabel from '@/image/kolmastabel.jpg'
import neljastabel from '@/image/neljastabel.jpg'

function Footer(){
  return (
    <div className="flex-1 w-full flex flex-col gap-30 items-center place-content-end">
      {}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
        {}
        <div style={{ position: 'relative', marginRight: '20px' }}>
        <Link href="/feedback">
          <Image
            src={logof}
            alt="Logof"
            className="logof"
            style={{
              width: '200px',
              height: 'auto',
            }}
          />
        </Link>
        </div>
        {}
        <div style={{ position: 'relative' }}>
        <Link href="/newsletter">
              <Image
                src={newslogo}
                alt="newslogo"
                className="newslogo"
                style={{
                  width: '200px',
                  height: 'auto',
                }}
              />
          </Link>
        </div>
      </div>
      <div className="flex-1 w-full flex flex-col gap-30 items-center place-content-end" style={{ position: 'relative' }}>
         <div style={{ position: 'absolute', top: '0cm', left: '3cm' }}>
            <Link href="/yourOpinion">
              <Image
               src={kolmastabel}
                alt="kolmastabel"
                className="kolmastabel"
                style={{
                width: '100px',
                height: 'auto',
              }}
             />
            </Link>
         </div>
      </div>
      <div className="flex-1 w-full flex flex-col gap-30 items-center place-content-end" style={{ position: 'relative' }}>
         <div style={{ position: 'absolute', top: '0cm', left: '0.5cm' }}>
            <Link href="/language">
              <Image
               src={neljastabel}
                alt="kolmastabel"
                className="kolmastabel"
                style={{
                width: '80px',
                height: 'auto',
              }}
             />
            </Link>
         </div>
      </div>
      {}
      <h1 style={{ fontWeight: 100 }}>© {new Date().getFullYear()} All rights reserved </h1>
    </div>
  );
}

export default Footer;


import Image from 'next/image';
import Link from 'next/link';
import kolmastabel from '@/image/kolmastabel.jpg';
import neljastabel from '@/image/neljastabel.jpg';

function Footer2() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between items-end p-4">
      <div style={{ position: 'absolute', left: '3cm', bottom: '0' }}>
        <Link href="/yourOpinion">
          <div>
            <Image
              src={kolmastabel}
              alt="kolmastabel"
              className="kolmastabel"
              width={150}
              height={150}
            />
          </div>
        </Link>
      </div>
      <div style={{ position: 'absolute', left: '0.5cm', bottom: '0' }}>
        <Link href="/language">
          <div>
            <Image
              src={neljastabel}
              alt="neljastabel"
              className="neljastabel"
              width={120}
              height={120}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer2;





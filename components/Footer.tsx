import Image from 'next/image';
import feedback from '@/image/feedback.jpg';
import newsletter from '@/image/newsletter.jpg';
import Link from 'next/link';

function Footer(){
  return (
    <div className="flex-1 w-full flex flex-col gap-30 items-center place-content-end">
      {}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
        {}
        <div style={{ position: 'relative', marginRight: '20px' }}>
        <Link href="/feedback">
          <Image
            src={feedback}
            alt="feedback"
            className="feedback"
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
                src={newsletter}
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
      {}
      <h1 style={{ fontWeight: 100 }}>© {new Date().getFullYear()} All rights reserved </h1>
    </div>
  );
}

export default Footer;


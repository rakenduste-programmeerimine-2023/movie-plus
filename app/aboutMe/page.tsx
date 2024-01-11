import AboutUsButton from '../../components/AboutMeButton';
import AuthButton from '../../components/AuthButton';
import Header from '@/components/Header';
import Image from 'next/image';
import me from '@/image/me.jpg';
import aboutMeStyle from '@/image/aboutMeStyle.jpg';
import aboutMeSecondStyle from '@/image/aboutMeSecondStyle.jpg';
import butterfly from '@/image/butterfly.jpg';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white">
      <div className="header-component absolute top-0 right-0">
        <Header />
      </div>
      <nav className="w-full h-16">
        <div className="max-w-4xl flex justify-between items-center p-3 text-sm mx-auto">
          <AboutUsButton />
          <AuthButton />
        </div>
      </nav>
      <div className="button-container relative flex flex-col items-center mt-5 font-thin">
        <a className="text-white font-thin text-4xl mb-2" style={{ marginTop: '10px' }}>About me</a>
        <div className="flex items-end">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
              <div className="mr-4" style={{ position: 'relative', bottom: '100px' }}>
              <Image src={aboutMeSecondStyle} alt="style" width={250} height={250} />
            </div>
            <div style={{ position: 'absolute', bottom: -15, left: -280 }}>
              <Image src={butterfly} alt="style" width={300} height={300} />
            </div>
            <div className="mr-4">
              <Image src={me} alt="Logo" width={250} height={250} />
              <p className="font-thin text-left">telegram:@kakskolmneli</p>
              <p className="font-thin text-left">instagram:@anjufehno</p>
            </div>
            <div className="mr-4">
              <Image src={aboutMeStyle} alt="style" width={250} height={250} />
            </div>
            <div style={{ position: 'absolute', top: -50, right: -200 }}>
              <Image src={butterfly} alt="style" width={300} height={300} />
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="footer-component" style={{ marginTop: '-100px' }}>
        <Footer />
      </div>
    </div>
  );
}

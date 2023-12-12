import SignUpButton from '../../components/SignUpButton';
import AboutUsButton from '../../components/AboutUsButton';
import AuthButton from '../../components/AuthButton';
import HeaderComponent from '@/components/HeaderComponent';
import FooterComponent from '@/components/FooterComponent';
import Image from 'next/image';
import me from '@/image/me.jpg';
import notme from '@/image/notme.jpg';

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white">
      <nav className="w-full border-b border-b-foreground/10 h-16">
        <div className="max-w-4xl flex justify-between items-center p-3 text-sm mx-auto">
          <AboutUsButton />
          <SignUpButton />
          <AuthButton />
        </div>
      </nav>
      <div className="button-container relative flex flex-col items-center mt-5">
        <a className="text-white font-thin text-4xl mb-2">About us</a>
        <div className="flex">
          <Image src={me} alt="Logo" width={250} height={250} className="mr-4" />
          <Image src={notme} alt="Logo" width={250} height={250} />
        </div>
      </div>
      <FooterComponent />
      <div className="header-component absolute top-0 right-0">
        <HeaderComponent />
      </div>
    </div>
  );
}



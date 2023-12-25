import SignUpButton from '../../components/SignUpButton';
import AboutUsButton from '../../components/AboutUsButton';
import AuthButton from '../../components/AuthButton';
import HeaderComponent from '@/components/Header';
import FooterComponent from '@/components/Footer';
import Image from 'next/image';
import me from '@/image/me.jpg';
import notme from '@/image/notme.jpg';

export default function Page() {
  return (
    <div className="flex flex">
      <nav className="w-full">
        <div className="max-w-4xl">
          <AboutUsButton />
          <SignUpButton />
          <AuthButton />
        </div>
      </nav>
      <div className="button-container">
      <a className="text-white">About us</a>
        <div className="flex items-end">
          <div className="mr-4">
            <Image src={me} alt="Logo" width={250} height={250} />
          </div>
          <div className="ml-4">
            <Image src={notme} alt="Logo" width={250} height={250} />
          </div>
        </div>
      </div>
      <FooterComponent />
      <div className="header">
        <HeaderComponent />
      </div>
    </div>
  );
}
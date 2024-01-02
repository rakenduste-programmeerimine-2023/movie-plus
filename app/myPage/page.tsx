import AboutUsButton from '../../components/AboutUsButton';
import AuthButton from '../../components/AuthButton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import login from '@/image/login.jpg';


export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white">
      <nav className="w-full border-b border-b-foreground/10 h-16">
        <div className="max-w-4xl flex justify-between items-center p-3 text-sm mx-auto">
          <AboutUsButton />
          <AuthButton />
        </div>
      </nav>
      <div className="button-container relative flex flex-col items-center mt-5">
        <div className="flex items-end">
          <div className="mr-4">
            <Image src={login} alt="Logo" width={250} height={250} />
          </div>
        </div>
      </div>
      <Footer />
      <div className="header-component absolute top-0 right-0">
        <Header />
      </div>
    </div>
  );
}
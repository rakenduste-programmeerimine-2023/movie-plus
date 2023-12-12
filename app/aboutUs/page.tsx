import SignUpButton from '../../components/SignUpButton';
import AboutUsButton from '../../components/AboutUsButton';
import AuthButton from '../../components/AuthButton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white">
      <nav className="w-full border-b border-b-foreground/10 h-16">
        <div className="max-w-4xl flex justify-between items-center p-3 text-sm mx-auto">
          <AboutUsButton />
          <SignUpButton />
          <AuthButton />
          <Header />
          <Footer/>
        </div>
      </nav>
      <div className="flex flex-1 items-center justify-center">
        <a
          className="py-6 px-8 rounded-md bg-btn-background-hover border font-thin text-2xl">
          About us
        </a>
      </div>
    </div>
  );
}

import AuthButton from '../../components/AuthButton';
import Footer2 from '@/components/Footer2';
import Image from 'next/image';
import login from '@/image/login.jpg';
import aboutMeSecondStyle from '@/image/aboutMeSecondStyle.jpg';
import aboutMeStyle from '@/image/aboutMeStyle.jpg';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Header2 from '@/components/Header2';

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect('/');

  return (
    <div className="flex-1 flex flex-col items-center min-h-screen text-white">
      <nav className="w-full border-b-foreground/10 h-16">
        <div className="max-w-4xl flex justify-between items-center p-3 text-sm mx-auto">
          <AuthButton />
        </div>
      </nav>
      <div className="absolute top-0 right-0">
        <Header2 />
      </div>
      <div className="button-container relative mt-5 text-center">
        <div className="flex flex-col items-center">
          <div style={{ display: 'flex' }}>
            <div className="mr-4">
              <Image src={aboutMeSecondStyle} alt="style" width={250} height={250} />
            </div>
            <div className="mb-4 mr-4">
              <Image src={login} alt="Logo" width={300} height={300} />
              <div className="text-pink-500 text-sm font-thin bg-opacity-75 p-2 max-w-xs">
                Hello! This page is created for authorized users. I have two mini-surveys for you, which you can take by clicking on the cute animals in the bottom left corner of the screen. ❤️ Have a great day!
              </div>
            </div>
            <div className="mr-4">
              <Image src={aboutMeStyle} alt="style" width={250} height={250} />
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

import AuthButton from '../../components/AuthButton';
import Footer2 from '@/components/Footer2';
import Image from 'next/image';
import login from '@/image/login.jpg';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore)
  const {
    data: { user },
  } = await supabase.auth.getUser()
  
  if (!user) return redirect('/')
  return (
    <div className="flex0 flex-col items-center min-h-screen  text-white">
      <nav className="w-full  border-b-foreground/10 h-16">
        <div className="max-w-4xl flex justify-between items-center p-3 text-sm mx-auto">
          <AuthButton />
        </div>
      </nav>
      <div className="button-container relative mt-5 text-center">
        <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image src={login} alt="Logo" width={250} height={250} />
            </div>
        <div className="text-pink-500 text-sm font-thin bg-opacity-75 p-2 max-w-xs">
            Hello! This page is created for authorized users. I have two mini-surveys for you, which you can take by clicking on the cute animals in the bottom left corner of the screen. ❤️ Have a great day!
        </div>
       </div>
      </div>
      <div>
    </div>
      <Footer2 />
    </div>
  );
}
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Image from 'next/image';
import login from '@/image/login.jpg';


export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return user ? (
    <div className="flex1">
      <div className="flex2">
          <Image src={login} alt="Logo" className="border-none" />
          </div>
      Hey, {user.email}!
      <form action={signOut}>
        <button className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border absolute top-0 left-0 m-4 ml-4 font-thin">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border absolute top-0 left-0 m-4 ml font-thin"
    >
      Login
    </Link>
  )
}

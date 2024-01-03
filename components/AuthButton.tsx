import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

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
    return redirect('/')
  }

  return user ? (
    <div className="flexf items-center font-thin gap-4">
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
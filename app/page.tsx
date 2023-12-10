import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { getbestMovies } from "@/API/api";
import Image from 'next/image'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function Index() {
  const cookieStore = cookies()
  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()
  const bestMovies = await getbestMovies();

  console.log('bestMovies', bestMovies)
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center bg-black">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
          <Header/>
        </div>
      </nav>
      <div className="потом буду делать css">
        <h1 className="best">Best Movies</h1>
        <div>
          {bestMovies?.map(movie => 
          <div>
            <Image 
            width={300}
            height={300}
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} 
            alt={movie?.title} />
            <div>{movie?.title}</div>
          </div>
          )}
          </div>
      </div>
      <Footer/>
    </div>
  )
}
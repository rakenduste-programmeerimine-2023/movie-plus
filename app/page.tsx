import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { getbestMovies, getcomedy, getdramaMovies, getHorror, getCartoons } from "@/API/api";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image'

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
  const comedy = await getcomedy();
  const dramaMovies = await getdramaMovies();
  const horror = await getHorror();
  const cartoons = await getCartoons();
  
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center bg-black">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
          <Header/>
        </div>
      </nav>
      <div className="h-[600px] overflow-auto w-full">
        <h1 className="best">Best movies</h1>
        <div className='flex flex-wrap w-full'>
          {bestMovies?.slice(0, 10)?.map((movie:any) => 
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
      <div className="h-[600px] overflow-auto w-full">
        <h1 className="best">Comedy movies</h1>
        <div className='flex flex-wrap w-full'>
          {comedy?.slice(0, 10)?.map((movie:any) => 
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
      <div className="h-[600px] overflow-auto w-full">
        <h1 className="best">Drama movies</h1>
        <div className='flex flex-wrap w-full'>
          {dramaMovies?.slice(0, 10)?.map((movie:any) => 
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
      <div className="h-[600px] overflow-auto w-full">
        <h1 className="best">Horror Movies</h1>
        <div className='flex flex-wrap w-full'>
          {horror?.slice(0, 10)?.map((movie:any) => 
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
      <div className="h-[600px] overflow-auto w-full">
        <h1 className="best">Cartoons</h1>
        <div className='flex flex-wrap w-full'>
          {cartoons?.slice(0, 10).map((movie:any) => 
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

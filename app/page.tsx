import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { getbestMovies, getcomedy, getdramaMovies, gethorror, getCartoons } from "@/API/api";
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
  const horror = await gethorror();
  const cartoons = await getCartoons();

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center bg-black">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
          <Header/>
        </div>
      </nav>
      <div className="h-[600px] overflow-auto w-full">
  <h1 className="text-lg md:text-xl lg:text-2xl font-thin text-center">Best movies</h1>
  <div className='flex flex-wrap justify-center gap-4'>
    {bestMovies?.slice(5, 10)?.map((movie:any, index:number) => (
      <div key={index} className="mb-4">
        <Image 
          width={230}
          height={230}
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} 
          alt={movie?.title} 
        />
        <div className="text-center">{movie?.title}</div>
      </div>
    ))}
  </div>
</div>
      <div className="h-[600px] overflow-auto w-full">
        <h1 className="text-lg md:text-xl lg:text-2xl font-thin text-center">Comedy movies</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {comedy?.slice(5, 10)?.map((movie:any) => 
          <div>
            <Image 
            width={230}
            height={230}
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} 
            alt={movie?.title} />
            <div>{movie?.title}</div>
          </div>
          )}
          </div>
      </div>
      <div className="h-[600px] overflow-auto w-full">
        <h1 className="text-lg md:text-xl lg:text-2xl font-thin text-center">Drama movies</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {dramaMovies?.slice(5, 10)?.map((movie:any) => 
          <div>
            <Image 
            width={230}
            height={230}
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} 
            alt={movie?.title} />
            <div>{movie?.title}</div>
          </div>
          )}
          </div>
      </div>
      <div className="h-[600px] overflow-auto w-full">
        <h1 className="text-lg md:text-xl lg:text-2xl font-thin text-center">Horror Movies</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {horror?.slice(11, 16)?.map((movie:any) => 
          <div>
            <Image 
            width={230}
            height={230}
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} 
            alt={movie?.title} />
            <div>{movie?.title}</div>
          </div>
          )}
          </div>
      </div>
      <div className="h-[600px] overflow-auto w-full">
        <h1 className="text-lg md:text-xl lg:text-2xl font-thin text-center">Cartoons</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {cartoons?.slice(5, 10).map((movie:any) => 
          <div>
            <Image 
            width={230}
            height={230}
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
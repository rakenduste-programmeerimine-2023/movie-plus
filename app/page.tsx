import AboutUsButton from "../components/AboutUsButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import {
  getbestMovies,
  getcomedy,
} from "@/API/api";
import MovieCard from "@/components/MovieCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default async function Index() {
  const cookieStore = cookies();
  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  const bestMovies = await getbestMovies();
  const comedy = await getcomedy();

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center bg-black">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <AboutUsButton />
          {isSupabaseConnected && <AuthButton />}
        </div>
        <div className="hj absolute top-0 right-0">
          <Header/>

        </div>
      </nav>
      <div className="h-[600px] overflow-auto w-full">
        <h1 className="text-lg md:text-xl lg:text-4xl font-thin text-center mb-4">
          Best movies
        </h1>
        <ul className="flex flex-wrap justify-center gap-4">
          {bestMovies
            ?.slice(1, 10)
            ?.map((movie: any, index: number) => (
              <MovieCard {...movie} key={movie.id} />
            ))}
        </ul>
      </div>
      <div
        className="h-[600px] overflow-auto w-full"
        style={{ marginTop: "-5rem" }}
      >
        <h1 className="text-lg md:text-xl lg:text-4xl font-thin text-center mb-4">
          Comedy movies
        </h1>
        <ul className="flex flex-wrap justify-center gap-4">
          {comedy
            ?.slice(1, 10)
            ?.map((movie: any) => <MovieCard {...movie} key={movie.id} />)}
        </ul>
      </div>
      <Footer />

    </div>
  );
}


import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getMovieDescription } from "@/API/api";
import Footer from "@/components/Footer";
import AuthButton from "@/components/AuthButton";
import Header from "@/components/Header";
import { Key } from "react";
import AboutUsButton from "@/components/AboutUsButton";

async function MovieDescriptionPage({ params }: {params:any}) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const movieDescription = await getMovieDescription(params?.filmId);

  console.log('movieDetails', movieDescription)
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return(
    <div className="flex-1 w-full flex flex-col gap-10 items-center bg-black">
      <nav className="w-full flex justify-center border-b-foreground/10 h-13">
    <div className="w-full max-w-7xl flex justify-between items-center py-1 px-3 text-sm">
        <AboutUsButton/>
        <AuthButton />
        <Header />
      </div>
    </nav>
  <div className="flex flex-col w-fit items-start">
    <div className="animate-in flex flex-row gap-8 self-center items-center pb-10"></div>
    <div className="flex flex-row justify-end gap-10">
      <div className="flex flex-col w-1/2 items-end">
        {movieDescription.backdrop_path && (
          <img
            src={IMAGE_BASE_URL + movieDescription.backdrop_path}
            className="custom-width"
            width={300}
            height={300}
          />
        )}
      </div>
      <div className="animate-in w-2/4 flex flex-col gap-10 self-start font-thin">
        <h1 className="text-[38px] mr-10 font-bold self-start w-1/2 font-thin">
          {movieDescription.title}
        </h1>
        <div className="flex flex-row w-full gap-2 font-thin">
          <h4 className="text-xl">Release date:</h4>
          <p className="mt-1">{movieDescription.release_date}</p>
        </div>
        <div className="flex flex-row w-full gap-2 font-thin items-center">
            <h4 className="text-xl">Movie genres:</h4>
              <div className="mt-1 flex flex-wrap gap-2">
            {movieDescription.genres &&
              movieDescription.genres
                .reduce((acc: any[][], genre: { name: any; }, index: number) => {
                  if (index % 2 === 0) {
                    acc.push([genre.name]);
                  } else {
                    acc[acc.length - 1].push(genre.name);
                  }
                  return acc;
                }, [])
                .map((group: any[], index: Key | null | undefined) => (
                  <p key={index}>{group.join(", ")}</p>
                ))}
          </div>
        </div>
        <div className="flex flex-col w-1/2 pr-20 gap-5 font-thin">
          <h4 className="text-xl">Movie description:</h4>
          <p>{movieDescription.overview}</p>
        </div>
      </div>
    </div>
  </div>
    <Footer />
 </div>
)

  
}

export default MovieDescriptionPage;

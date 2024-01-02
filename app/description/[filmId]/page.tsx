import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getMovieDescription } from "@/API/api";
import Footer from "@/components/Footer";
import AuthButton from "@/components/AuthButton";
import Header from "@/components/Header";

async function MovieDetailsPage({ params }: {params:any}) {
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

  return(<div className="w-full flex flex-col min-h-screen gap-20 items-center">
  <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
    <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
      <Header />
      <AuthButton />
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
          />
        )}
      </div>
      <div className="animate-in w-2/4 flex flex-col gap-10 self-start">
        <h1 className="text-2xl mr-10 font-bold self-start w-1/2">
          {movieDescription.title}
        </h1>

        <div className="flex flex-row w-full gap-6">
          <h4 className="text-xl">Genres:</h4>
          <div className="w-1/2 mt-1">
            {movieDescription.genres &&
              movieDescription.genres
                .reduce((acc, genre, index) => {
                  if (index % 2 === 0) {
                    acc.push([genre.name]);
                  } else {
                    acc[acc.length - 1].push(genre.name);
                  }
                  return acc;
                }, [])
                .map((group, index) => (
                  <p key={index}>{group.join(", ")}</p>
                ))}
          </div>
        </div>
        <div className="flex flex-col w-1/2 pr-20 gap-5">
          <h4 className="text-xl">Description:</h4>
          <p>{movieDescription.overview}</p>
        </div>
      </div>
    </div>
  </div>

  <footer className="w-full border-t border-t-foreground/10 mt-auto">
    <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
        <Footer />
      </div>
    </div>
  </footer>
 </div>
)

  
}

export default MovieDetailsPage;

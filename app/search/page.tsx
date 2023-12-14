import React from "react";
import { getMoviesBySearch } from "@/API/api";
import AuthButton from "@/components/AuthButton";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import MovieCard from "@/components/MovieCard";

interface PageProps {
  searchParams: { query: string };
}

async function Page({ searchParams }: PageProps) {
  const searchText = searchParams.query;
  const searchedMovies = await getMoviesBySearch({ query: searchText });

  if (!searchedMovies) {
    return <div>loading...</div>;
  }
  return (
    <div className="f">
      <nav className="w">
        <div className="wj">
          <HeaderComponent />
          <AuthButton />
        </div>
      </nav>
      <ul className="flex flex-wrap justify-center gap-4">
        {searchedMovies?.map(
          (movie: any) =>
            movie?.poster_path && <MovieCard {...movie} key={movie.id} />
        )}
      </ul>
      <footer className="wi">
        <div className="wp">
          <div className="h">
            <FooterComponent />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;

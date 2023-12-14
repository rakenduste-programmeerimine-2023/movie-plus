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

  return (
    <div className="f">
      <nav className="w">
        <div className="wj">
          <HeaderComponent />
          <AuthButton />
        </div>
      </nav>
      <ul className="flex flex-wrap justify-center gap-4">
        {searchedMovies
          ?.slice(6, 11)
          .map((movie: any) => <MovieCard {...movie} key={movie.id} />)}
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

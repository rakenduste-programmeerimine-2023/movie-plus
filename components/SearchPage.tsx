"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  date: string;
  popular: number;
}

interface Props {
  searchText: string;
  search: Movie[];
}

export default function SearchPage({ searchText, search }: Props) {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(search);

  useEffect(() => {
    setFilteredMovies(search);
  }, [search]);

  const filterMovies = (filter: string) => {
    let sortedMovies: Movie[] = [...search];
    switch (filter) {
      case "date":
        sortedMovies.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;

      case "popular":
        sortedMovies.sort((a, b) => b.popular - a.popular);
        break;

      default:
        break;
    }
    setFilteredMovies(sortedMovies);
  };

  return (
    <div className="container">
      <h1 className="text">
        {searchText}
      </h1>
      <div className="text1">
        <select
          className="select"
          onChange={(e) => filterMovies(e.target.value)}
          id="sorting-filter"
          defaultValue={"default"}
        >
          <option value="default" disabled>
            Sort by
          </option>
          <option value="date">Date</option>
          <option value="popular">Popular</option>
        </select>
      </div>
      <div className="flex justify-center flex-wrap gap-8">
        {filteredMovies.map((movie) => (
          <div key={movie.id}>
            <Link href={`/search/${movie.id}`} passHref>
              <div className="card" style={{ width: "15rem" }}>
                {}
                <h4>{movie.title}</h4>
                <p>Date: {movie.date}</p>
                <p>Popularity: {movie.popular}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

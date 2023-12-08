export const getbestMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/best?",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_AUTH}`,
      },
    }
  );
  const data = await res.json();

  return data.results;
};
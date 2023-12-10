export const getbestMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_API_AUTH}`,
        },
      }
    );
    const data = await res.json();
    console.log('data', data);
    return data.results;
  };
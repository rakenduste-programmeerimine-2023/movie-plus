export const getbestMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&with_genres=16&sort_by=popularity.desc",
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

  export const getcomedy= async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?&with_genres=35&without_genres=16&sort_by=popularity.desc ",
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
  }

  export const getdramaMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?&with_genres=18&sort_by=popularity.desc",
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
  }

  export const gethorror = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?&with_genres=27",
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
  export const getCartoons = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?&with_genres=16",
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

  export const getMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?&language=en-US&page=1`,
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

  
  export const getMoviesBySearch = async ({query}: {query: string}) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
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
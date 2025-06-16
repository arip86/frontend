import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import axios from 'axios';

function Hero() {
  const [movie, setMovie] = useState(null); // Awalnya null untuk validasi data

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    async function fetchTrendingMovies() {
      try {
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        const response = await axios(URL);
        const firstMovie = response.data.results[0];
        return firstMovie;
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        return null;
      }
    }

    async function fetchDetailMovie() {
      const trendingMovie = await fetchTrendingMovies();
      if (!trendingMovie) return;
      try {
        const id = trendingMovie.id;
        const params = `?api_key=${API_KEY}&append_to_response=videos`;
        const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
        const response = await axios(URL);
        setMovie({
          Title: response.data.title,
          Genre: response.data.genres.map(g => g.name).join(', '),
          Plot: response.data.overview,
          Poster: `https://image.tmdb.org/t/p/w500${response.data.poster_path}`
        });
      } catch (error) {
        console.error('Error fetching movie detail:', error);
      }
    }

    fetchDetailMovie();
  }, []);

  // Cegah error render saat movie belum ada
  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>{movie.Genre}</h3>
          <p className={styles.hero__description}>
            {movie.Plot}
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt="poster"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;




// import styles from "./Hero.module.css";
// function Hero(){
//          const [movie, setMovie] = useState({});

//     useEffect(() => {
//         async function fetchMovies() {
//             const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=d24c1a9d");
//             const data = await response.json();
//             setMovie(data);
//         }
//         fetchMovies();
//     }, []);
//     return(
// <div className={styles.container}>
// <section className={styles.hero}>
//     <div className={styles.hero__left}>
//         <h2 className={styles.hero__title}>Spiderman</h2>
//         <h3 className={styles.hero__genre}>Genre: Thriller, Drama, Romance</h3>
//       <p className={styles.hero__description}>
//       Lorem Ipsum is simply dummy text 
//       of the printing and typesetting industry. 
//       Lorem Ipsum has been the industry's standard dummy 
//       text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//     </p>  
//     <button className={styles.hero__button}>Watch</button>
//     </div>
//     <div>
//         <img className={styles.hero__image}
//         src="https://picsum.photos/200/300/"
//         />
//     </div>
// </section>
// </div>
//     )
// }




export default Hero;

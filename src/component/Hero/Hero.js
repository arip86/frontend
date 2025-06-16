import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import axios from 'axios';

function Hero() {
  const [movie, setMovie] = useState({}); // Gunakan objek kosong agar bisa akses properti

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    async function fetchTrendingMovies() {
      const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios(URL);
      return response.data.results[0];
    }

    async function fetchDetailMovie() {
      const trendingMovie = await fetchTrendingMovies();
      const id = trendingMovie.id;
      const detailURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
      const response = await axios(detailURL);
      const data = response.data;

      // Menyesuaikan struktur data agar cocok dengan properti dari OMDB
      setMovie({
        Title: data.title,
        Genre: data.genres,
        Plot: data.overview,
        Poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`
      });
    }

    fetchDetailMovie();
  }, []);

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

// import {React, useState} from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './Movies.module.css';
import Movie from '../Movie/Movie';
import data from '../../utils/constants/data';

function Movies(){
    const [movies, setMovies] = useState(data);
    function handleClick(){
        const movie = {
            id: nanoid(), 
            title: "Jigsaw",
            year: "2022", type: "Movie",
            poster: "https://picsum.photos/200/300/"
        };
        // movies.push(movie);
        setMovies([...movies, movie]);
        //state untuk menyimpan suatu proses
    }
    return(
<div className={styles.container}>
<section className={styles.movies}>
<h2 className={styles.movies__title}>Latest Movies</h2>
<div className={styles.movie__container}>
   {
    movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />
    })
   }
</div> 
<button onClick={handleClick}>Add Movie</button> 
</section>
</div>
)}
export default Movies;
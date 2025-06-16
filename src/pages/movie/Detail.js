import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailMovie(){


    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    useEffect(()=>{
          async function getDetailMovie(){
             const API_KEY = import.meta.env.VITE_API_KEY; 
            const params = `?api_key=${API_KEY}&append_to_response=videos`;
            const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
            const response = await axios(URL);
            setMovie(response.data);
        }
        getDetailMovie();  
    },[id] );

    return(

         <div>
                   <section>
                       <div>
                           <h2 >{movie.title}</h2>
                           <h3 >{movie.Genre}</h3>
                           <p >
                              {movie.Plot}
                           </p>
                           <button >Watch</button>
                       </div>
                       <div >
                           <img 
                          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                           alt='placeholder'
                           />
                       </div>
                   </section>
               </div>
    )
}

export default DetailMovie;

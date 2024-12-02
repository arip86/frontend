
import Hero from "../component/Hero/Hero";
import Movies from "../component/Movies/Movies";
import AddMovie from "../component/AddMovie/AddMovie";
import data from "../utils/constants/data";
import { useState } from "react";
function Home (){
    const [movies, setMovies] = useState(data);
    return(
        <div>
           
           <main>
            <Hero />
            <Movies movies={movies} setMovies={setMovies}/>
            <AddMovie movies={movies} setMovies={setMovies} />
            </main>
           
        </div>
    )
}
export default Home;
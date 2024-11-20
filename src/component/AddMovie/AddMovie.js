import { useState } from "react";
import styles from './AddMovie.module.css';
import { nanoid } from "nanoid";

function AddMovie(props){
    const {movies, setMovies} = props;
    const[date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [isTitleError, setTitleError] = useState(false);
    const [isDateError, setDateError] = useState(false);
    

    function handleTitle(e){
        setTitle(e.target.value);
      
    }
    function handleDate(e){
        setDate(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault(e);
        if(title === ""){
            setTitleError(true);
        } else if (date === ""){
            setDateError(true);
        } else {
       
        const movie = {
            id: nanoid(),
            title: title,
            year: date, type: "Movie",
            poster: "https://picsum.photos/200/300/"
        };
        setMovies([...movies, movie]);
        setTitleError(false);
        setDateError(false);
        }
    }
    return (
        <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <label>
                Title
            </label>
            <input className={styles.input_form}
            id="title"
            type="text"
            value={title}
            onChange={handleTitle}
            />
            {
                isTitleError && <p>Title Wajib Diisi</p>
            }
            <label>
              Date
            </label>
            <input className={styles.input_form}
            id="date"
            type="text"
            value={date}
            onChange={handleDate}
            />
            {
                isDateError && <p>Date Wajib Diisi</p>
            }
            <button className={styles.button_form}>Add Movie</button>
        </form>
        </div>
    )
}
export default AddMovie;
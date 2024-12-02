import { useState } from "react";
import styles from './AddMovie.module.css';
import { nanoid } from "nanoid";

function AddMovie(props){
    const {movies, setMovies} = props;
    // const[date, setDate] = useState("");
    // const [title, setTitle] = useState("");
    const [isTitleError, setTitleError] = useState(false);
    const [isDateError, setDateError] = useState(false);
    
const [formData, setFormData] = useState({
    title: "",
    date: "",
});
function handleChange(e){
const {name, value} = e.target;
setFormData({
    ...formData, 
    [name]:value,
});
}

    // function handleTitle(e){
    //     setTitle(e.target.value);
      
    // }
    // function handleDate(e){
    //     setDate(e.target.value);
    // }
function addMovie(){
        const movie = {
            id: nanoid(),
            title: title,
            year: date, type: "Movie",
            poster: "https://picsum.photos/200/300/"
        };
        setMovies([...movies, movie]);
    }
    function validate(){
        if(title === ""){
            setTitleError(true);
            return false;
        } else if (date === ""){
            setDateError(true);
            setTitleError(false);
            return false;
        } else {
            setDateError(false);
            setTitleError(false);
            return true;
    }
}
const {title, date} = formData;
    function handleSubmit(e){
        e.preventDefault(e);
        // if(title === ""){
        //     setTitleError(true);
        // } else if (date === ""){
        //     setDateError(true);
        // } else {
       validate() && addMovie();
        // const movie = {
        //     id: nanoid(),
        //     title: title,
        //     year: date, type: "Movie",
        //     poster: "https://picsum.photos/200/300/"
        // };
        // setMovies([...movies, movie]);
        // setTitleError(false);
        // setDateError(false);
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
            name="title"
            onChange={handleChange}
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
            name="date"
            onChange={handleChange}
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
import React,{ useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';
//96564839
const API_URL = 'https://www.omdbapi.com?apikey=96564839';
// const movie1 = {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// }

const App = () =>{
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const searchMovies =async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Superman');
    },[]);
    return(
        <div className = "app">
            <h1>Movie Site</h1>
    
            <div className = "search">
                <input
                placeholder="Search for movies"
                value = {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            <img src = {SearchIcon}
                 alt="search"
                 onClick={()=>searchMovies(searchTerm)}
            />
            </div>
            {
                movies?.length >0
                 ?( 
                 <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie = {movie}/>))}
                 </div>
                 ):
                 (
                    <div className = "empty">
                        <h2>No movies found</h2>
                    </div>
                 )
            } 
           
        </div>
    );
}
export default App;
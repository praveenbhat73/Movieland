import React from "react";
import { useState,useEffect } from "react";
import'./App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com?apikey=d3f2fd1e";

const App =()=>
{
    
    const[movie,setmovie]=useState([]);
    const[s,sets]=useState(' ');

    useEffect(() => {
        searchMovies("Batman");
      }, []);
    
      const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    
        setmovie(data.Search);
      };
      const Movie1=
        {
            "Title": "Batman: The Animated Series",
            "Year": "1992–1995",
            "imdbID": "tt0103359",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
        }
      
    return (
       
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input type="text" name="" id="" placeholder="Search for movies"
                value={s} onChange={(event)=>sets(event.target.value)}/>
                <img src={SearchIcon} alt="search" onClick={()=>searchMovies(s)} />
            </div>

            {
                    movie?.length > 0
                    ?
                    (
                        <div className="container">
                            {movie.map((movie=>(
                                <MovieCard movie={movie}/>
                            )))}
                        </div>

                    )
                    :
                    (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }


           
        </div>
       
    );
}
export default App;
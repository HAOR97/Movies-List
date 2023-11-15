import "./App.css";
import Header from "./components/header/header";
import { useState } from "react";
import initialStateFilms from "./data";
import { generateUID } from "./utils/helpers.js";
import TableMovies from "./components/tableMovies/tableMovies";
import CardsMovies from "./components/CardMovies";

function Home() {
  const [filmovi, setFilmovi] = useState(initialStateFilms);
  const [tableOpen, setTableOpen] = useState(true);

  function addMovie(name, director, rating, len, type) {
    if (name === "" || director === "" || rating === "" || len === "") {
      alert("Niste popunili sva polja");
    } else {
      setFilmovi([
        ...filmovi,
        {
          id: generateUID(),
          name: name,
          director: director,
          rating: rating,
          len: len,
          type: type,
        },
      ]);
    }
  }

  function handleDelethe(movie) {
    setFilmovi((prviousValue) => prviousValue.filter((m) => m.id !== movie.id));
  }

  function changelook() {
    setTableOpen(!tableOpen);
  }

  return (
    <>
    
       <Header addMovie={addMovie} look={changelook} />
      {filmovi.length > 0 ? (
        tableOpen ? (
          <div>
            <TableMovies izbrisi={handleDelethe} sviFilmovi={filmovi} />
          </div>
        ) : (
          <CardsMovies sviFilmovi={filmovi} />
        )
      ) : (
        <div style={{paddingTop:"200px"}}>
          <p style={{ textAlign: "center", fontSize: "40px" }}>
            Nema jos ni jedan film
          </p>
        </div>
      )} 
    </>
  );
}

export default Home;

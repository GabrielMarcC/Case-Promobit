import { useState, useEffect } from "react";
import { GridMovies } from "./components/GridMovies";
import { Hero } from "./components/Hero";
import axios from "axios";
import dotenv from "dotenv";
import { Movie } from "./types/MoviesTypes";

function App() {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    handleRequest();
  }, []);

  console.log(data);

  const handleRequest = async (): Promise<void> => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=67f9b0b07f86f15eb11e9686a713fa10&language=pt-BR&page=1`
      )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Hero />
      <div className="grid grid-cols-2">
        {data.map((movie: Movie, index) => {
          return <GridMovies data={movie} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;

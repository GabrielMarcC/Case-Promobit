import { useState, useEffect } from "react";
import { GridMovies } from "./components/GridMovies";
import { Hero } from "./components/Hero";
import { Movie } from "./types/MoviesTypes";
import { config } from "./config";
import axios from "axios";

function App() {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    handlePopularMovies();
  }, []);

  console.log(data);

  const handlePopularMovies = async (): Promise<void> => {
    await axios
      .get(
        `${config.base_URL}/popular?api_key=${config.apiKey}&language=pt-BR&page=1`
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

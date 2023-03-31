import { useState, useEffect } from "react";
import { Hero } from "../../components";
import { GridMovies } from "../../components";
import axios from "axios";
import { Movie } from "../../types/MoviesTypes";
import { config } from "../../config";

export const Home = () => {
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
      <div className="flex justify-center lg:mt-8">
        <div className="grid gap-x-4 grid-cols-2 md:pt-2 md:px-3 lg:gap-x-8 md:grid-cols-6 md:max-w-[1050px]">
          {data.map((movie: Movie, index) => {
            return <GridMovies data={movie} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

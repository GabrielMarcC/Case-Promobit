import { useEffect, useState } from "react";
import { MoviesServices } from "../../services/services";
import { GenresResponse } from "../../types/GenresTypes";

export const useGenres = () => {
  const genreService = MoviesServices();
  const [genresData, setGenresData] = useState<GenresResponse>(
    {} as GenresResponse
  );

  useEffect(() => {
    genreService.handleGenres().then((response) => {
      setGenresData(response);
    });
  }, []);

  

  return { genresData};
};

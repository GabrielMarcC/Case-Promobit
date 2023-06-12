import { useEffect, useState } from "react";
import { MoviesServices } from "../../services/services";
import { GenresResponse } from "../../types/GenresTypes";

export const useGenres = () => {
  const genreService = MoviesServices();
  const [genresData, setGenresData] = useState<GenresResponse>(
    {} as GenresResponse
  );
  const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([]);

  useEffect(() => {
    genreService.handleGenres().then((response) => {
      setGenresData(response);
    });
  }, []);

  const getGenreId = (id: number) => {
    const verifiedId = selectedGenreIds.filter((genreId) => genreId != id);

    if (selectedGenreIds.includes(id)) {
      setSelectedGenreIds(verifiedId);
    } else {
      setSelectedGenreIds([...selectedGenreIds, id]);
    }
  };

  return { genresData, getGenreId, selectedGenreIds };
};

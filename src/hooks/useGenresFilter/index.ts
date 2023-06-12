import { useState, useEffect } from "react";
import { MoviesTypes } from "../../types";

type GenresFilterProps = {
  movies: MoviesTypes[];
};

export const useGenresFilter = ({ movies }: GenresFilterProps) => {
  const [filteredMovies, setFilteredMovies] = useState<MoviesTypes[]>([]);
  const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([]);

  useEffect(() => {
    const filteredMovies = movies?.filter((movie) =>
      movie?.genre_ids?.some?.((genreId) => selectedGenreIds?.includes(genreId))
    );
    setFilteredMovies(filteredMovies);
  }, [movies, selectedGenreIds]);

  const getGenreId = (id: number) => {
    const verifiedId = selectedGenreIds.filter((genreId) => genreId != id);

    if (selectedGenreIds.includes(id)) {
      setSelectedGenreIds(verifiedId);
    } else {
      setSelectedGenreIds([...selectedGenreIds, id]);
    }
  };

  return { filteredMovies, selectedGenreIds, getGenreId };
};

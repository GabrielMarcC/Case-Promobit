import { useEffect, useState } from "react";
import { MoviesServices } from "../../services/services";
import { MoviesTypes } from "../../types";

export const useMovie = () => {
  const movieService = MoviesServices();
  const [movie, setMovie] = useState<MoviesTypes[]>([]);
  const [page, setPage] = useState<number | undefined>(1);

  const handleChangePage: React.MouseEventHandler<HTMLUListElement> = (
    event
  ) => {
    const index = Number(event.currentTarget.dataset.index);
    setPage(index);
  };

  useEffect(() => {
    movieService.handlePopularMovies(page).then((response) => {
      setMovie(response.results);
    });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  return { movie, handleChangePage };
};

import { useState, useEffect } from "react";
import { MoviesServices } from "../../services/services";
import { MoviesDetailsTypes } from "../../types";
import { useParams } from "react-router";

export const useMovieDetails = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<MoviesDetailsTypes>(
    {} as MoviesDetailsTypes
  );

  const movieDetailService = MoviesServices();

  useEffect(() => {
    movieDetailService.handleMoviesDetails(id).then((response) => {
      setMovieDetail(response);
    });
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  return { movieDetail };
};

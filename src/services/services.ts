import { config } from "../config";
import axios from "axios";
import { PopularMovies } from "../types/MoviesTypes";
import { GenresResponse } from "../types/GenresTypes";
import {
  CreditsTypes,
  MoviesDetailsTypes,
  RecommendationsTypes,
} from "../types";

export const MoviesServices = () => {
  const handlePopularMovies = async (page?: number): Promise<PopularMovies> => {
    const response = await axios.get<PopularMovies>(
      `${config.base_URL}/popular?api_key=${config.apiKey}&language=pt-BR&page=${page}`
    );
    return response.data;
  };

  const handleMoviesDetails = async (
    id?: string
  ): Promise<MoviesDetailsTypes> => {
    const response = await axios.get<MoviesDetailsTypes>(
      `${config.base_URL}/${id}?api_key=${config.apiKey}&language=pt-BR&include_image_language=pt-BR&append_to_response=videos,images,release_dates`
    );

    return response.data;
  };

  const handleCredits = async (id?: string): Promise<CreditsTypes> => {
    const response = await axios.get<CreditsTypes>(
      `${config.base_URL}/${id}/credits?api_key=${config.apiKey}&language=pt-BR`
    );
    return response.data;
  };

  const handleRecommendations = async (
    id?: string
  ): Promise<RecommendationsTypes> => {
    const response = await axios.get<RecommendationsTypes>(
      `${config.base_URL}/${id}/recommendations?api_key=${config.apiKey}&language=pt-BR`
    );

    return response.data;
  };

  const handleGenres = async (): Promise<GenresResponse> => {
    const response = await axios.get<GenresResponse>(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${config.apiKey}&language=pt-Br`
    );
    return response.data;
  };

  return {
    handlePopularMovies,
    handleCredits,
    handleGenres,
    handleMoviesDetails,
    handleRecommendations,
  };
};

import { useState, useEffect } from "react";
import { Details } from "../../components/Details";
import { config } from "../../config";
import { MoviesDetails } from "../../types/MoviesDetailsTypes";
import { useParams } from "react-router";
import { Credits } from "../../types/CreditsTypes";
import axios from "axios";

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState<MoviesDetails>();
  const [credits, setCredits] = useState<Credits>();
  const { id } = useParams();

  console.log(movieDetails);

  useEffect(() => {
    handleMovieDetails();
    handleCredits();
  }, []);

  const handleMovieDetails = async () => {
    await axios
      .get(
        `${config.base_URL}/${id}?api_key=${config.apiKey}&language=pt-BR&include_image_language=pt-BR&append_to_response=videos,images,release_dates`
      )
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCredits = async () => {
    await axios
      .get(
        `${config.base_URL}/${id}/credits?api_key=${config.apiKey}&language=pt-BR`
      )
      .then((response) => {
        setCredits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {movieDetails !== undefined && credits !== undefined && (
        <Details movie={movieDetails} credits={credits} />
      )}
    </div>
  );
};

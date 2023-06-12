import { useState, useEffect } from "react";
import { Recommendations } from "../../types/RecommendationsTypes";
import { MoviesServices } from "../../services/services";
import { useParams } from "react-router";

export const useRecommendation = () => {
  const { id } = useParams();
  const recommendationService = MoviesServices();
  const [recommendationData, setRecommendationData] = useState<
    Recommendations[]
  >([]);

  useEffect(() => {
    recommendationService.handleRecommendations(id).then((response) => {
      setRecommendationData(response.results);
    });
  }, []);

  return { recommendationData };
};

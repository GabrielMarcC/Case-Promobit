import { useRecommendation } from "../../hooks";
import { MoviesCard } from "../MoviesCard";

export const Recomendations = () => {
  const { recommendationData } = useRecommendation();
  const recommendation = recommendationData?.slice?.(0, 6);

  return (
    <div className="grid grid-cols-2 gap-4 my-0 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 pb-5">
      {recommendation?.map?.((recomendation, index) => {
        return (
          <MoviesCard movie={recomendation} id={recomendation.id} key={index} />
        );
      })}
    </div>
  );
};

import { useEffect, useState } from "react";
import { MoviesServices } from "../../services/services";
import { useParams } from "react-router";
import { CreditsTypes } from "../../types";

export const useCredits = () => {
  const creditsService = MoviesServices();
  const { id } = useParams();
  const [creditsData, setCreditsData] = useState<CreditsTypes>({
    cast: [],
    crew: [],
  });

  useEffect(() => {
    creditsService.handleCredits(id).then((response) => {
      setCreditsData(response);
    });
  }, [id]);

  return { creditsData };
};

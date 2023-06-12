import { useCredits } from "../../hooks";

export const CrewCredits = () => {
  const { creditsData } = useCredits();
  const crewCredits = creditsData.crew?.slice?.(0, 4);

  return (
    <div className="grid grid-cols-2  h-[180px] mt-[33px] p-4">
      {crewCredits.map(({ credit_id, name, known_for_department }) => (
        <div key={credit_id} className="flex flex-col justify-between">
          <div className="flex flex-col justify-between pr-12">
            <div>
              <p className="font-bold leading-6">{name}</p>
            </div>
            <div className="flex">
              <p className="text-[14px] leading-5 pt-1">
                {known_for_department}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

import { useCredits } from "../../hooks";

export const CastCredits = () => {
  const { creditsData } = useCredits();
  const castCredits = creditsData.cast?.slice?.(0, 20);

  return (
    <div className="overflow-x-scroll scroll-smooth flex gap-4">
      {castCredits.map(
        ({ cast_id, profile_path, original_name, character }) => {
          return (
            <div
              className="border-[#d8dce4] max-w-[200px] max-h-[380px] h-auto pb-4 flex flex-1 justify-center"
              key={cast_id}
              role="Cards do que representam o elenco"
            >
              <div className="w-[190px] h-auto rounded-md bg-white  drop-shadow-lg p-2 flex flex-col items-start justify-center">
                <img
                  className="w-[180px] h-[260px] rounded-lg p-1"
                  src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                  alt={`${original_name}`}
                />
                <div className="flex flex-col items-start pl-1 pt-2 flex-1 max-w-[100%]">
                  <p className="font-bold">{original_name}</p>
                  <p>{character}</p>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

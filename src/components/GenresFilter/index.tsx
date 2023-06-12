import { useGenres } from "../../hooks";
import { useState } from "react";
import { BsXCircleFill } from "react-icons/bs";

type GenresFilterProps = {
  getGenreId: (id: number) => void;
};

export const GenresFilter = ({ getGenreId }: GenresFilterProps) => {
  const { genresData } = useGenres();
  const [activeGenres, setActiveGenres] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleButton = (genreId: number) => {
    setActiveGenres((prevActiveGenres) => ({
      ...prevActiveGenres,
      [genreId]: !prevActiveGenres[genreId],
    }));
  };

  return (
    <div className="flex max-w-[1200px] flex-wrap pt-4 pb-4 gap-2 items-center justify-center pr-4 md:justify-center lg:justify-center">
      {genresData.genres?.map((genre) => {
        const isActive = activeGenres[genre.id] || false;

        return (
          <button
            key={genre.id}
            onClick={() => {
              getGenreId(genre.id);
              toggleButton(genre.id);
            }}
            className={`${
              isActive
                ? "bg-orange-500 text-[white] rounded-sm font-bold w-auto h-[35px] py-2 px-4 gap-2 text-base whitespace-nowrap overflow-hidden overflow-ellipsis flex justify-center items-center truncate"
                : "text-[#323232] rounded-sm font-bold w-auto h-[35px] py-2 px-4 gap-2 text-base whitespace-nowrap overflow-hidden overflow-ellipsis bg-white flex justify-center items-center truncate"
            }`}
          >
            {genre.name}
            {isActive ? <BsXCircleFill enableBackground={"white"} /> : null}
          </button>
        );
      })}
    </div>
  );
};

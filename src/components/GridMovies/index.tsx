import { Movie } from "../../types/MoviesTypes";
import { formatData } from "../../utils/formatData";

type Props = {
  data: Movie;
};

export const GridMovies = ({ data }: Props) => {
  return (
    <main className=" flex flex-col justify-start items-center  my-2">
      <div className="flex justify-start items-start">
        <img
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          className=" w-[154px] h-[232px]"
        />
      </div>
      <div className="flex items-center justify-center  flex-col mt-2 w-auto h-auto">
        <div className="max-w-[80%] h-[100%]  items-center flex mt-1 justify-center">
          <h1 className="font-bold text-[14px]">{data.title}</h1>
        </div>
        <div className="w-[100%] flex justify-center p-2">
          <p className="text-[12px] text-[#646464] font-bold leading-[18px]">
            {formatData(data.release_date)}
          </p>
        </div>
      </div>
    </main>
  );
};

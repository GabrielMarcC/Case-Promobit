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
          src="https://2.bp.blogspot.com/-TOCRLYBV3N4/UsbbAXBZmkI/AAAAAAAAPuM/DbPHOcuv6HA/s1600/A-Menina-Que-Roubava-Livros-capa-filme-1.jpg"
          className=" w-[154px] h-[232px]"
        />
      </div>
      <div className="flex items-center justify-start  flex-col mt-2 w-auto h-auto">
        <div className="max-w-[80%] h-[80%]  items-center flex mt-1 justify-start">
          <h1 className="font-bold text-[14px]">{data.title}</h1>
        </div>
        <div>
          <p className="text-[12px] text-[#646464] font-bold leading-[18px]">
            {formatData(data.release_date)}
          </p>
        </div>
      </div>
    </main>
  );
};

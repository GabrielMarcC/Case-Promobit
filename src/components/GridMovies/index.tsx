import { Movie } from "../../types/MoviesTypes";
import { formatData } from "../../utils/formatData";
import { useNavigate } from "react-router";

type Props = {
  data: Movie;
  id: number;
};

export const GridMovies = ({ data, id }: Props) => {
  const newData = formatData(data.release_date);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/moviedetails/${id}`);
  };

  return (
    <main
      className="flex flex-col justify-start items-center  my-2 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-start items-start">
        <img
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          className=" w-[154px] h-[232px]"
        />
      </div>
      <div className="flex items-center justify-center  flex-col mt-2 w-auto h-auto">
        <div className="w-[158px]  md:pl-2 h-[100%]  items-center flex mt-1">
          <h1 className="font-bold text-[14px] text-left ">{data.title}</h1>
        </div>
        <div className="w-[158px]">
          <p className="text-[12px] text-[#646464] font-bold leading-[18px] text-left md:pl-2">
            {newData.finalData}
          </p>
        </div>
      </div>
    </main>
  );
};

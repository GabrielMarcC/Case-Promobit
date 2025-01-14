import { GenresFilter } from "../GenresFilter";
import { Header } from "../Header";

type GenresFilterProps = {
  getGenreId: (id: number) => void;
};

export const Hero = ({ getGenreId }: GenresFilterProps) => {
  return (
    <section className="flex flex-col w-full h-[530px] bg-[#2D0C5E]">
      <Header />
      <div className="flex flex-col sm:items-center sm:justify-center md:items-center md:justify-center lg:justify-center  lg:items-center">
        <div className=" max-w-[281px] mt-[40px] ml-[16px] sm:max-w-[500px] md:text[56px] md:lealding-[56px] md:max-w-[600px] lg:max-w-[781px] lg:h-[112px]">
          <h2 className=" text-white font-bold text-[24px]  md:text[48px] leading-6 lg:leading-[56px] lg:text-[48px]">
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </h2>
        </div>
        <div className="ml-4 flex flex-col justify-center items-start sm:items-center md:items-center lg:items-center">
          <div className="max-w-[79px] mt-6 lg:mt-[40px]">
            <h3 className="text-[14px] text-white font-bold leading-5">
              FILTRE POR:
            </h3>
          </div>
          <GenresFilter getGenreId={getGenreId} />
        </div>
      </div>
    </section>
  );
};

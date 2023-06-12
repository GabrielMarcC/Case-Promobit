import { Recomendations } from "../Recomendations";
import { formatData, formatHour } from "../../utils";
import { CastCredits } from "../CastCredits";
import { CrewCredits } from "../CrewCredits";
import { Header } from "../Header";
import { useMovieDetails } from "../../hooks";

export const Details = () => {
  const { movieDetail } = useMovieDetails();
  const { release_date, runtime, poster_path, title, overview, genres } =
    movieDetail;
  const newData = formatData(release_date);
  const duration = formatHour(runtime);
  const genreList = genres?.map((genre) => genre.name).join(" , ");
  const urlImage = "https://image.tmdb.org/t/p/original";
  const trailer = movieDetail?.videos?.results[0]?.key;
  return (
    <div role="details page">
      <Header />
      <section className="w-full sm:flex md:flex lg:flex">
        <div className="flex justify-center items-center bg-[#2D0C5E] sm:p-4 md:p-4 lg:px-10">
          <img
            className="w-[186px] h-[279p] pt-9 sm:w-[400px] sm:h-[450px] md:w-[400px]  md:h-[574px] lg:w-[380px] lg:h-[574px] lg:pb-4"
            src={`${urlImage}/${poster_path}`}
          />
        </div>
        <div className="px-4 text-white font-normal h-auto bg-[#2D0C5E] md:w-[80%] lg:w-[80%]">
          <div className="flex flex-col font-normal pt-[42px] lg:flex">
            <h2 className="font-bold text-[32px] leading-[38px] tracking-tighter py-2">
              {title} ({newData?.yearFullYear().year})
            </h2>
            <div className="flex flex-col sm:flex-row  md:flex-row lg:flex-row">
              <span className=" md:pr-2 lg:pr-2">
                {newData?.yearFullYear().fullYear} (BR)
              </span>
              <span className="md:pr-2 lg:pr-2">{genreList}</span>
              <span>{duration}</span>
            </div>
          </div>
          <div className="py-4">
            <h2>Avaliação dos usuários</h2>
          </div>
          {overview ? (
            <div className="lg:w-[90%]">
              <h2 className="font-bold text-[20px] leading-6">Sinopse</h2>
              <p className="text-[16px] leading-6 tracking-tighter pt-4 text-justify text-[#e5e7eb]">
                {overview}
              </p>
            </div>
          ) : (
            <div>
              <h4 className="font-bold text-[20px] leading-6 py-2">Sinopse</h4>
              <p className="text-[#e5e7eb]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita, debitis nihil! In officiis sequi distinctio quidem sed
                saepe commodi culpa hic molestiae suscipit perferendis, eum
                sapiente! Eligendi suscipit a vel?
              </p>
            </div>
          )}
          <div className="flex justify-center gap-10 sm:justify-start md:justify-start lg:justify-start">
            <CrewCredits />
          </div>
        </div>
      </section>
      <section className="bg-white mt-[45px] md:max-w-[900px] lg:max-w-[1000px] w-full flex flex-col m-auto">
        <div className="pl-4">
          <h2 className="font-bold text-[28px] lg:pt-6">Elenco Original</h2>
        </div>
        <div className="flex pl-1 max-w-[1200px] w-full">
          <CastCredits />
        </div>
        <div className="flex flex-col items-center lg:items-start pt-11">
          <div className="flex flex-col w-[324px] h-[242px] md:w-[680px] md:h-[500px] lg:w-[907px] lg:h-[600px]">
            <h2 className="font-bold text-[28px] pb-2">Trailer</h2>
            <iframe
              className="w-[324px] h-[242px] md:w-[600px] md:h-[600px] lg:w-[907px] lg:[600px]"
              src={`https://www.youtube.com/embed/${trailer}`}
              referrerPolicy="origin"
              title={`${title}`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="pt-16 w-full flex flex-col  justify-center items-center">
          <div className="flex flex-col justify-center items-start">
            <h2 className="font-bold text-[28px] flex">Recomendações</h2>
            <Recomendations />
          </div>
        </div>
      </section>
    </div>
  );
};

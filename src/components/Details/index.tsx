import { Header } from "../../components";
import { Credits } from "../../types/CreditsTypes";
import { MoviesDetails } from "../../types/MoviesDetailsTypes";
import { formatData, formatHour } from "../../utils";

type Props = {
  movie: MoviesDetails;
  credits: Credits;
};

export const Details = ({ movie, credits }: Props) => {
  const year = formatData(movie.release_date);
  const fullYear = formatData(movie.release_date);
  const genreList = movie.genres.map((genre) => genre.name);
  const genre = genreList.join(" , ");
  const duration = formatHour(movie.runtime);
  const urlImage = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center bg-[#2D0C5E]">
        <img
          className="w-[186px] h-[279p] pt-9"
          src={`${urlImage}/${movie.poster_path}`}
        />
      </div>
      <section className="px-4 text-white font-normal h-auto bg-[#2D0C5E]">
        <div className="flex flex-col font-normal pt-[42px]">
          <h1 className="font-bold text-[32px] leading-[38px] tracking-tighter py-2">
            {movie.title} ({year.year})
          </h1>
          <span className="pt-2">{fullYear.fullYear} (BR)</span>
          <span>{genre}</span>
          <span>{duration}</span>
        </div>
        <div className="py-4">
          <p>Avaliação dos usuários</p>
        </div>
        {movie.overview ? (
          <div>
            <h4 className="font-bold text-[20px] leading-6">Sinopse</h4>
            <p className="text-[16px] leading-6 tracking-tighter pt-4 text-justify text-[#e5e7eb]">
              {movie.overview}
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
        <div className="grid grid-cols-2  h-[180px] mt-[33px] pb-1 ">
          {credits.crew.slice(0, 4).map((crew) => {
            return (
              <div
                key={crew.credit_id}
                className="flex flex-col justify-center items-start"
              >
                <div className="flex flex-col items-start">
                  <div>
                    <p className="font-bold leading-6">{crew.name}</p>
                  </div>
                  <div className="flex">
                    <p className="text-[14px] leading-5 pt-1">
                      {crew.known_for_department}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-white mt-[45px] flex flex-col ">
        <div className="w-[200px] h-[32px] pl-[16px]">
          <h1 className="font-bold  text-[28px] text-[#131313] leading-8 tracking-tighter">
            Elenco original
          </h1>
        </div>
        <div className="overflow-y-scroll scroll-smooth flex pt-4">
          {credits.cast.slice(0, 3).map((cast) => {
            return (
              <div
                className="whitespace-nowrap snap-x snap-center  border-[#d8dce4] h-[360px] px-2"
                key={cast.cast_id}
              >
                <div className="w-[191px] h-[340px] rounded-md bg-white  drop-shadow-lg">
                  <div>
                    <img
                      className="w-[180px] h-[290px] rounded-sm p-2"
                      src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                    />
                  </div>
                  <div className="pl-2">
                    <h3 className="font-bold break-words">
                      {cast.original_name}
                    </h3>
                  </div>
                  <div className="pl-2 mb-2">
                    <h3 className="pb-1">{cast.character}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[324px] h-[300px] mt-[32px] pl-[18px]">
          <div className="pb-[14px]">
            <h1 className="font-bold text-[#131313] text-[28px] tracking-tighter leading-8 ">
              Trailer
            </h1>
          </div>
          <div className="w-full h-[182px] cursor-pointer relative">
            <a href={`https://www.youtube.com/watch?v=`} target="_blank">
              <img
                src={`${urlImage}/${movie.backdrop_path}`}
                alt={`${movie.original_title}`}
              />
            </a>
            <div className="z-50 absolute top-14 text-white font-bold text-[38px] pl-2">
              <div>
                <p>OFFICIAL</p>
              </div>
              <div>
                <p>TRAILER</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

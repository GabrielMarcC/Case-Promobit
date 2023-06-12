import { MoviesCard } from "../../components";
import { Hero } from "../../components";
import { MoviesTypes } from "../../types/MoviesTypes";
import { useMovie } from "../../hooks/useMovie";
import { Pagination } from "../../components/Pagination";
import { useGenresFilter } from "../../hooks";

export const Home = () => {
  const { movie, handleChangePage } = useMovie();
  const { filteredMovies, selectedGenreIds, getGenreId } = useGenresFilter({
    movies: movie,
  });
  const displayMovies = selectedGenreIds.length > 0 ? filteredMovies : movie;

  return (
    <div>
      <Hero getGenreId={getGenreId} />
      <section className="flex flex-col justify-center  lg:mt-8 max-w-[1024px] w-full m-auto">
        <div className="grid  grid-cols-2  md:pt-2 md:px-3 lg:gap-x-4 smp:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4">
          {displayMovies.map((movie: MoviesTypes, index) => {
            return <MoviesCard movie={movie} key={index} id={movie.id} />;
          })}
        </div>
        <Pagination handleChangePage={handleChangePage} />
      </section>
    </div>
  );
};

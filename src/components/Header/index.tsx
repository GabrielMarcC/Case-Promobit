import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <header className="bg-[#5C16C5] w-full h-[56px] flex items-center justify-center  lg:justify-start lg:p-5">
      <div
        role="tmdb back home"
        onClick={handleBackHome}
        className="hover:cursor-pointer"
      >
        <h1 className=" text-white font-bold px-2 text-[18px] md:text-[48px] lg:text-[48px] lg:ml-[112px] lg:py-4">
          TMDB
        </h1>
      </div>
      <div className="bg-white rounded-lg h-[18px] w-[40px] px-2"></div>
    </header>
  );
};

import { Header } from "../Header";

export const Hero = () => {
  return (
    <section className="flex flex-col w-full h-[530px] bg-[#2D0C5E]">
      <Header />
      <div className="lg:flex lg:justify-center lg:flex-col lg:items-center">
        <div className=" max-w-[281px] mt-[40px] ml-[16px] lg:max-w-[781px] lg:h-[112px]">
          <h2 className=" text-white font-bold text-[24px] leading-6 lg:leading-[56px] lg:text-[48px]">
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </h2>
        </div>
        <section className="ml-4">
          <div className="max-w-[79px] mt-4 lg:mt-[40px]">
            <h3 className="text-[14px] text-white font-bold leading-5">
              FILTRE POR:
            </h3>
          </div>
          <div></div>
        </section>
      </div>
    </section>
  );
};

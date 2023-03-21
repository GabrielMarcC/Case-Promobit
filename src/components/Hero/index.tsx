import { Header } from "../Header";

export const Hero = () => {
  return (
    <section className="flex flex-col w-full h-[530px] bg-[#2D0C5E]">
      <Header />
      <div className=" max-w-[281px] mt-[40px] ml-[16px]">
        <h2 className=" text-white font-bold text-[24px] leading-6">
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </h2>
      </div>
    </section>
  );
};

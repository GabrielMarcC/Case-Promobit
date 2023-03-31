import { Header } from "../../components";

export const MovieDetails = () => {
  return (
    <div className="bg-[#2D0C5E] h-auto">
      <Header />
      <div className="flex justify-center items-center">
        <img
          className="w-[186px] h-[279p] pt-9"
          src="https://img.elo7.com.br/product/zoom/1E3BBAE/big-poster-do-filme-deadpool-tamanho-90x-0-cm-loot-op-007-marvel.jpg"
        />
      </div>
      <section className="px-4 text-white font-normal h-[600px]">
        <div className="flex flex-col font-normal pt-[42px]">
          <h1 className="font-bold text-[32px] leading-[38px]">TITULO</h1>
          <span>faixa etária</span>
          <span>lançamento</span>
          <span>generos</span>
          <span>duração</span>
        </div>
        <div className="py-4">
          <p>Avaliação dos usuários</p>
        </div>
        <div>
          <h4 className="font-bold text-[20px] leading-6">Sinopse</h4>
          <p className="text-[16px] leading-6 tracking-tighter pt-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            numquam repudiandae vitae eaque, iure quibusdam aliquam qui, tempora
            voluptate obcaecati itaque praesentium! Temporibus qui, quia itaque
            officia suscipit sunt iure!
          </p>
        </div>
        <div className="flex px-4 w-[328px] h-auto justify-between mt-[33px]">
          <div className="flex flex-col p-2">
            <div className="pb-4">
              <p>aa</p>
              <p>ss</p>
            </div>
            <div>
              <p>gg</p>
              <p>Screenplay</p>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <div className="pb-4">
              <p>hghß</p>
              <p>aae</p>
            </div>
            <div>
              <p>dsadsasda</p>
              <p>Screenplay</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div>
          <h1>Elenco Original</h1>
        </div>
      </section>
    </div>
  );
};

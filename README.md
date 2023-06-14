# Case Promobit

O projeto consiste em uma listagem dos filmes mais populares do dia utilizando a API gratuita themoviedb, os filmes são atualizados em tempo real, com a opção de filtragem e detalhamento do filme em outra página, exibindo todas informações pertinentes a respeito.





## Desafio

Usando a API de filmes gratuita themoviedb, você será responsável por criar uma listagem dos filmes mais populares do dia, consultando o endpoint GET /movie/popular para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido deve ser exibida. Para acessar mais detalhes sobre o filme, você pode consultar o endpoint GET /movie/{movie_id}.

Para garantir que o usuário encontre o filme que está procurando, essa lista deverá ser paginada.

Siga o layout do figma sugerido. Não há necessidade de ser pixel perfect mas respeite a composição, fontes e cores.


## Realizado

&#10004;  O usuário deve ter acesso a uma listagem dos filmes mais populares do dia

&#10004; O usuário deve conseguir paginar a lista para encontrar novos filmes

&#10004; O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem

&#10004; A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa
## Funcionalidades

- Página interativa
- Filtragem de filmes
- Design responsivo
- Navegação entre páginas


## Tecnologias Utilizadas

- HTMl5
- Javascript
- TailwindCSS
- Typescript
- React + ViteJS
## Rodando localmente:

Clone o projeto

```bash
  git clone: https://github.com/GabrielMarcC/Case-Promobit
```

Entre no diretório do projeto

```bash
  cd Case-Promobit
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev: inicie dessa forma para modificações no projeto.
  npm run preview: inicie uma prévia do projeto.
```


## Aprendizados


Durante o projeto, aprendi e utilizei várias tecnologias, incluindo HTML5, JavaScript, Tailwind CSS, TypeScript, React e ViteJS. Essas ferramentas me ajudaram a estruturar a aplicação, estilizá-la, criar componentes reutilizáveis e gerenciar o estado de forma eficiente. Foi uma experiência enriquecedora de aprendizado e me permitiu desenvolver habilidades essenciais no desenvolvimento frontend
## Deploy

Para realizar o deploy da aplicação, utilizei a plataforma Vercel. A Vercel é uma plataforma de hospedagem que oferece integração perfeita com projetos baseados em frameworks como o React e o ViteJS. Com poucos passos, pude fazer o upload do código para a Vercel e configurar as opções de build e deploy. A plataforma se encarregou de compilar o projeto e disponibilizá-lo online de forma rápida e confiável. O uso da Vercel simplificou o processo de deploy, permitindo que eu concentrasse mais tempo no desenvolvimento da aplicação em si.


### Link: https://case-promobit-steel.vercel.app/

## Autor

[Gabriel Marcelino](https://github.com/GabrielMarcc)

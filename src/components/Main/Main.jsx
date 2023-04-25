import badge from "/assets/badge.svg";
import "./Main.scss";

const imagens = [
  {
    nome: "artista-1",
    caminho: "/assets/artista-1.png",
  },
  {
    nome: "artista-3",
    caminho: "/assets/artista-3.png",
  },
  {
    nome: "artista-6",
    caminho: "/assets/artista-6.png",
  },
  {
    nome: "artista-4",
    caminho: "assets/artista-4.png",
  },
];

const Main = () => {
  return (
    <div className="main">
      <div>
        <div className="content">
          Mercado digital para colecionáveis em criptos e tokens não fungível
          (NFT). Compre, venda e descubra ativos digitais exclusivos para você.
        </div>
        <div className="image">
          <div className="image-carrosel">
            {imagens.map((imagem) => (
              <img key={imagem.nome} src={imagem.caminho} alt={imagem.nome} />
            ))}
          </div>
          <div className="image-text">
            <span>+10</span>
            Artistas selecionados
          </div>
        </div>
      </div>
      <div className="mid-content">Descubra a verdadeira arte digital e colecione diversas <span>NFTs</span></div>
      <div>
        <img src={badge} alt="" />
      </div>
    </div>
  );
};

export default Main;

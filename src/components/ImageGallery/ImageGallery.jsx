import React from "react";
import "./ImageGallery.scss";

const imagens = [
  {
    nome: "galeria-1",
    caminho: "/assets/galeria-1.png",
  },
  {
    nome: "galeria-2",
    caminho: "/assets/galeria-2.png",
  },
  {
    nome: "galeria-3",
    caminho: "/assets/galeria-3.png",
  },
  {
    nome: "galeria-4",
    caminho: "/assets/galeria-4.png",
  },
  {
    nome: "galeria-5",
    caminho: "/assets/galeria-5.png",
  },
  {
    nome: "galeria-6",
    caminho: "/assets/galeria-6.png",
  },
  {
    nome: "galeria-7",
    caminho: "/assets/galeria-7.png",
  },
  {
    nome: "galeria-8",
    caminho: "/assets/galeria-8.png",
  },
];

const ImageGallery = () => {
  return (
    <div className="imagens">
      {imagens.map((imagem) => (
        <img key={imagem.nome} src={imagem.caminho} alt={imagem.nome} />
      ))}
    </div>
  );
};

export default ImageGallery;

import React from "react";
import "./Header.scss";
import logoMetaMask from '../../assets/logo_MetaMask.svg'

const Header = () => {
  return (
    <div className="cabeçalho">
      <div>
        <h1>
          Rocket <span>NFTs</span>
        </h1>
      </div>
      <div className="navbar">
        <a href="#">Comprar NFT</a>
        <a href="#">Sobre</a>
        <a href="#">FAQ</a>
      </div>
      <button><img src={logoMetaMask} alt="" /> Conectar carteira</button>
    </div>
  );
};

export default Header;

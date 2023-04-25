import "./WeeklyPopular.scss";

const WeeklyPopular = () => {
  const astronautas = [
    {
      cosmonauta: "Astronauta 1",
      nome: "Mayk Brito",
      valor: "1.50 RKT",
      caminho: "/assets/astronauta 1.png",
    },
    {
      cosmonauta: "Astronauta 2",
      nome: "Jakeliny Gracielly",
      valor: "2.0 RKT",
      caminho: "/assets/astronauta-2.png",
    },
    {
      cosmonauta: "Astronauta 3",
      nome: "João Inácio (Biro)",
      valor: "3.75 RKT",
      caminho: "/assets/astronauta-3.png",
    },
    {
      cosmonauta: "Astronauta 4",
      nome: "Tamires Santos",
      valor: "4.30 RKT",
      caminho: "/assets/astronauta-4.png",
    },
  ];

  return (
    <div className="card-popular">
      <h1>
        <span>Populares</span> da semana
      </h1>
      <div>
        <div className="cards">
          {astronautas.map((astronauta) => (
            <div className="astronautas">
              <div className="cosmonauta">
                <span className="cosmonauta-nome">{astronauta.cosmonauta}</span>
                <div>
                  <img src="/src/assets/arrow-white.svg" alt="" />
                </div>
              </div>
              <div className="cosmonauta">
                <span className="cosmonauta-id">{astronauta.nome}</span>
                <span className="cosmonauta-value">{astronauta.valor}</span>
              </div>
              <img src={astronauta.caminho} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyPopular;

import "./Article.scss";

const Article = () => {
  return (
    <div className="article">
      <div className="numbers-sales">
        <div className="numbers">
          <div>10K+</div>
          <span>Artes</span>
        </div>
        <div className="numbers">
          <div>200+</div>
          <span>Vendas</span>
        </div>
        <div className="numbers">
          <div>20</div>
          <span>Artistas</span>
        </div>
      </div>
      
      <div className="article-text">
        <div className="text">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id potenti diam et cras odio
              viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
              semper.
            </p>

            <a href="#">Lorem ipsum</a>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id potenti diam et cras odio
              viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
              semper.
            </p>

            <a href="#">Lorem ipsum</a>
          </div>
        </div>

        <div className="banner">
          <img src="/assets/banner.png" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Article;

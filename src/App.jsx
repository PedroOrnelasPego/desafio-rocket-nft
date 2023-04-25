import "./App.css";
import Article from "./components/Article/Article";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";
import Main from "./components/Main";
import WeeklyPopular from "./components/WeeklyPopular";

function App() {
  return (
    <div>
      <div className="first-main">
        <Header />
        <Main />
        <ImageGallery />
      </div>
      <Article />
      <div className="first-main">
        <WeeklyPopular />
      </div>
    </div>
  );
}

export default App;

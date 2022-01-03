import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="yoga" />
        </main>
      </div>
      <footer className="App-footer">
        This project was coded by{" "}
        <a href="http://anasommer.com" target="_blank" rel="noreferrer">
          Ana Sommer
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/anasommer/react-dictionary"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced in Github
        </a>{" "}
        and{" "}
        <a
          href="https://dazzling-ritchie-4c0a9f.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;

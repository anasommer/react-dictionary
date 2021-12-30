import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="App-footer">Coded by Ana Sommer</footer>
    </div>
  );
}

export default App;

// https://dazzling-ritchie-4c0a9f.netlify.app/

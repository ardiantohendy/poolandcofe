import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <section className="main">
        <ul>
          <li>
            <a href="#">Pool</a>
          </li>
          <li>
            <a href="#">Cafe</a>
          </li>
          <li>
            <a href="#">Life Music</a>
          </li>
        </ul>
        <span></span>
      </section>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primera CLI en react by <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/nikoroude/react-ecommerce-coderhouse"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Nicolas Roude
        </a>
      </header>
    </div>
  );
}

export default App;

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="badColumn">
          <h1>Bad List</h1>
        </div>
        <div className="movieColumn">
          <button>New Movie</button>
        </div>
        <div className="goodColumn">
          <h1>Good List</h1>
        </div>
      </div>

      <div className="container">
        <div className="badColumn">
          <p>bad1</p>
          <p>bad2</p>
        </div>
        <div className="movieColumn">
          <p>Generated Movie</p>
          <div className="buttons">
            <button>no</button>
            <button>yes</button>
          </div>
        </div>
        <div className="goodColumn">
          <p>good1</p>
          <p>good2</p>
        </div>
      </div>
    </div>
  );
}

export default App;

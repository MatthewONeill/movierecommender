import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="badColumn">
          <h1>Bad List</h1>
        </div>
        <div className="movieColumn">
          <button className="newMovieButton">New Movie</button>
        </div>
        <div className="goodColumn">
          <h1>Good List</h1>
        </div>
      </div>

      <div className="container">
        <div className="badColumn">
          <p>First Bad Movie</p>
          <p>Second Bad Movie</p>
        </div>
        <div className="movieColumn">
          <p>Generated Movie</p>
          <div className="buttons">
            <button className="noButton">No</button>
            <button className="yesButton">Yes</button>
          </div>
        </div>
        <div className="goodColumn">
          <p>First Good Movie</p>
          <p>Second Good Movie</p>
        </div>
      </div>
    </div>
  );
}

export default App;

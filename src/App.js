import './App.css';
import BadList from './Components/BadList';
import GoodList from './Components/GoodList'
import GenerateMovie from './Components/GenerateMovie';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="badColumn">
          <h1>Bad List</h1>
        </div>
        <div className="movieColumn"> 
          <h1>Movie Recommender</h1>
        </div>
        <div className="goodColumn">
          <h1>Good List</h1>
        </div>
      </div>

      
      <GenerateMovie />

    </div>
  );
}

export default App;

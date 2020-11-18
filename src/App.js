import './App.css';
import BadList from './Components/BadList';
import GoodList from './Components/GoodList'
import GenerateMovie from './Components/GenerateMovie';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
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

      <div className="container">
        <BadList />
        <GenerateMovie />
        <GoodList />
      </div>
    </div>
  );
}

export default App;

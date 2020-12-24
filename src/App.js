import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Components/Main';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </div>
    </Router>
  );
}

export default App;

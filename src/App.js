import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Components/Main';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Navbar from './Components/Navbar/Navbar';
import Logout from './Components/Login/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Main} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/logout" exact component={Logout} />
      </div>
    </Router>
  );
}

export default App;

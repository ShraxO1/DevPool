import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from "./components/auth/register";
import Login from "./components/auth/login";

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <div className="container">
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
            </div>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;

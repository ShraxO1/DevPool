import './App.css';
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import {Provider} from "react-redux";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Router>
                <Navbar />
                <Route exact path='/' component={Landing} />
                <div className="container">
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/login' component={Login}/>
                </div>
                <Footer/>
            </Router>
        </Provider>
    </div>
  );
}

export default App;

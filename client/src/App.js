import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser} from "./actions/authActions";

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import {Provider} from "react-redux";
import './App.css';

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
}

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

import store from "./store";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser, logoutUser} from "./actions/authActions";
import {clearCurrentProfile} from "./actions/profileActions";

import PrivateRoute from "./components/common/PrivateRoute";

import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
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

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Clear current Profile
        store.dispatch(clearCurrentProfile());
        // Redirect to login
        window.location.href = '/login';
    }
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
                    <Switch>
                    <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                    </Switch>
                    <Switch>
                        <PrivateRoute exact path='/create-profile' component={CreateProfile}/>
                    </Switch>
                    <Switch>
                        <PrivateRoute exact path='/edit-profile' component={EditProfile}/>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </Provider>
    </div>
  );
}

export default App;

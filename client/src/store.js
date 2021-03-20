import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const middlware = [thunk];

const store = createStore(() => [],{}, applyMiddleware(...middlware));

export default store;
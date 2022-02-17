import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "thunk";
import reducer from "./reducers/reducer";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

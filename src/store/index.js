import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

//creating store
const store = createStore(reducer, composeWithDevTools());

export default store;

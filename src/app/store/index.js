import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleware = [thunk];
const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, composedEnhancers);

export { store };

import {createStore, applyMiddleware,compose}from "redux";
import reducer from "../Reducer/Reducer"
import thunk from "redux-thunk"
const composeEnancers =  
(typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXPENSION_COMPOSE__) ||
    compose;

let store = createStore(
    reducer,
    composeEnancers(applyMiddleware(thunk)),
    )
    export default store
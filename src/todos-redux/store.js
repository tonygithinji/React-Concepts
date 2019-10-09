import { createStore } from "redux";
import todosReducers from "./reducers"

export default createStore(todosReducers);
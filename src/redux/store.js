import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"

const composed = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
const store = createStore(reducer, composed)

export default store
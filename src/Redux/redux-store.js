import { combineReducers,  legacy_createStore as createStore } from "redux";
import messageReducer from "./message-reducer"
import navBarReducer from "./nav-bar-reducer";
import profileReducer from "./profile-reduser"

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    navBar: navBarReducer
})

let store = createStore(reducers);

export default store;
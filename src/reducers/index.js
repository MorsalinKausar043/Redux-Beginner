import changeTheNumber from "./increDecre";
import multDevideChange from "./multdevide";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    changeTheNumber,
    multDevideChange
});

export default rootReducers;
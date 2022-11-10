import changeNumber from "./incDec";
import { combineReducers } from "redux";

const reducers = combineReducers(
    {
    //   myNumber:changeNumber
        changeNumber
    }
);
export default reducers;
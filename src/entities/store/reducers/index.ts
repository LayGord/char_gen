import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./totoReducer";

todoReducer
export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
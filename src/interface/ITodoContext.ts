import { Dispatch } from "react";
import { TodoState } from "./TodoState";
import { actions } from "../actions/actions";

export interface ITodoContext {
    state: TodoState;
    dispatch: Dispatch<actions>;
}
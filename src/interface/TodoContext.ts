import { Dispatch } from "react";
import { TodoState } from "./TodoState";
import { actions } from "../actions/actions";

export interface TodoContext {
    state: TodoState;
    dispatch: Dispatch<actions>;
}
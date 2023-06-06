import { Dispatch } from "react";
import { TodoState } from "../context/listContext";
import { add_action } from "../actions/actions";

export interface ITodoContext {
    state: TodoState;
    dispatch: Dispatch<add_action>;
}
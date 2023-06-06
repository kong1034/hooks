import { ITodo } from "../interface/ITodo";

export type add_action = { type:'ADD'; payload: { todo:ITodo } };
import { ITodo } from "../interface/ITodo";


export type actions = 
| { type:'ADD'; payload: { todo:ITodo } }
| { type:'DEL', payload: { id:number } }
| { type:'CHE', payload: { todo:ITodo, id:number, isComplete:boolean } };

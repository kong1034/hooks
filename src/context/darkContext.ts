import { createContext } from "react";
import { darkType } from "../interface/darkType";

export const darkContext = createContext<darkType | null>(null);
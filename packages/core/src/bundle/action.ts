import { IAcceptFilter } from "./acceptfilter";

export interface Action {
    type: string;
    name: string | {[key: string]: string;}
    accepts: IAcceptFilter[];
}
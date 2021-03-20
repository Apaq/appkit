import { IAcceptFilter } from "./acceptfilter";

export interface Action {
    key: string;
    name: string | {[key: string]: string;}
    accepts: IAcceptFilter[];
}
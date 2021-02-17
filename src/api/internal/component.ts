import { IAcceptFilter } from "./acceptfilter";

export interface IComponent {
    id:string;
    type: 'App' | 'Widget';
    accepts: IAcceptFilter[];
    name: string | {[key: string]: string;}
}

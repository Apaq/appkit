import { IData } from "../data";
import { Bundle } from "./bundle";
import { Component } from "./component";

export interface BundleManager {
    resolveComponents(filter: {type?: 'App' | 'Widget', action?:{type: string, data: IData}}): { baseUrl: string, bundle: Bundle, component: Component }[];
}
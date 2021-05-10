import { ActionFilter } from "./actionfilter";
import { Bundle } from "./bundle";
import { Component } from "./component";

export interface BundleManager {
    resolveComponents(filter: {type?: 'App' | 'Widget', actionFilter?: ActionFilter}): { baseUrl: string, bundle: Bundle, component: Component }[];
}
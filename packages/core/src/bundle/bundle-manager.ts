import { ActionFilter } from "./actionfilter";
import { Bundle } from "./bundle";
import { Component } from "./component";

/**
 * Interface for a BundleManager.
 * 
 * A BundleManager can resolve components that have actions that matches the type or/and the given ActionFilter.
 */
export interface BundleManager {
    resolveComponents(filter: {type?: 'App' | 'Widget', actionFilter?: ActionFilter}): { baseUrl: string, bundle: Bundle, component: Component }[];
}
import { Bundle } from "../internal/bundle";

export interface ComponentManager {
    // The bundle this component belongs to
    bundle: Bundle;
    
    // The id of this component
    id: string;

    // The localized app name
    name: string;

    // The app version
    version: string;
}
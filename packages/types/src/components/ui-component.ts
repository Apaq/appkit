import { Bundle } from "../bundle";

export interface UiComponent {
        // The bundle this component belongs to
        bundle: Bundle;
    
        // The id of this component
        id: string;
    
        // The localized app name
        name: string;
}

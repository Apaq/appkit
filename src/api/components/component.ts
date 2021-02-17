export interface IComponent {
    // The bundleID this component belongs to
    bundleId: string;
    
    // The id of this component
    id: string;

    // The localized app name
    name: string;

    // The app version
    version: string;
}
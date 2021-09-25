import { ComponentDefinition } from "../bundle/component.definition";

export interface ComponentInformation extends ComponentDefinition {
    bundleId: string;
}
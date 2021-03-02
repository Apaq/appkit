import { IComponent } from "./component";
import { Dependency } from "./dependency";

export interface Bundle {
    id: string;
    name: string | {[key: string]: string;};
    version: string;
    description: string;
    keywords: string[];
    homepage: string;
    bugs: {url: string, email?: string},
    localize: boolean | string[],
    type: 'application/javascript' | 'module',
    jsFile: string,
    cssFile: string,
    components: IComponent[];
    dependencies: Dependency[];
}


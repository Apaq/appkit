import { IComponent } from "./component";

export interface IBundle {
    id: string;
    name: string | {[key: string]: string;};
    version: string;
    description: string;
    keywords: string[];
    homepage: string;
    bugs: {url: string, email?: string},
    localize: boolean | string[],
    jsFile: string,
    cssFile: string,
    components: IComponent[];
}


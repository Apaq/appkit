import { IComponent } from "./component";

export interface IBundle {
    id: string;
    name: string;
    version: string;
    description: string;
    keywords: string[];
    homepage: string;
    bugs: {url: string, email?: string},
    i18n: {lcalized:boolean, defauleLocale: string},
    mainFile: string,
    components: IComponent[];

}


import { ContentProviderClient } from "../content/content-provider-client";
import { ContentResolver } from "../content/content-resolver";

export class ContentResolverProxy implements ContentResolver {
    resolve<TYPE, ID>(uri: string): ContentProviderClient<TYPE, ID> {
        throw new Error("Method not implemented.");
    }

}
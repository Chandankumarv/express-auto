import { HttpMethod } from "../enums/HttpMethod";
declare class RoutesMetadata {
    target: Object;
    method?: HttpMethod;
    path?: string;
    handler: Function;
}
export declare class RoutesMetaStore {
    private static instance;
    private metadataStore;
    static readonly Instance: RoutesMetaStore;
    readonly metadata: Map<string, RoutesMetadata[]>;
    setMetadata(key: string, routesMetadata: RoutesMetadata): void;
    getMetaDataItem(key: string): RoutesMetadata[];
}
export {};

declare class RoutesMetadata {
    target: Function;
    method?: string;
    path?: string;
    handler: any;
}
export declare class RoutesMetaStore {
    private static instance;
    private metadataStore;
    static readonly Instance: RoutesMetaStore;
    readonly metadata: Map<string, RoutesMetadata>;
    setMetadata(key: string, routesMetadata: RoutesMetadata): void;
}
export {};

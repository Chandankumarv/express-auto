declare class ServicesMetadata {
    target: Function;
}
export declare class ServicesMetaStore {
    private static instance;
    private metadataStore;
    static readonly Instance: ServicesMetaStore;
    readonly metadata: Map<string, ServicesMetadata>;
    setMetadata(key: string, servicesMetadata: ServicesMetadata): void;
}
export {};

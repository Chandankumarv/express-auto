declare class FeatureMetadata {
    target: Function;
}
export declare class FeatureModuleMetaStore {
    private static instance;
    private metadataStore;
    static readonly Instance: FeatureModuleMetaStore;
    readonly metadata: Map<string, FeatureMetadata>;
    setMetadata(key: string, featureMetadata: FeatureMetadata): void;
}
export {};

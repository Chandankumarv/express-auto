declare class RoutersMetadata {
    target: Function;
    path?: string;
}
export declare class RoutersMetaStore {
    private static instance;
    private metadataStore;
    static readonly Instance: RoutersMetaStore;
    readonly metadata: Map<string, RoutersMetadata>;
    setMetadata(key: string, routersMetadata: RoutersMetadata): void;
}
export {};

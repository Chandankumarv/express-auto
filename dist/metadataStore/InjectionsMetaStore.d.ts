declare class InjectionsMetadata {
    target: Object;
    propertyKey: string | symbol;
    resolver?: string;
}
export declare class InjectionsMetaStore {
    private static instance;
    private metadataStore;
    static readonly Instance: InjectionsMetaStore;
    readonly metadata: Map<string, InjectionsMetadata[]>;
    setMetadata(key: string, injectionsMetadata: InjectionsMetadata): void;
}
export {};

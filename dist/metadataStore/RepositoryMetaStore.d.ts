declare class RepositoriesMetadata {
    target: Function;
}
export declare class RepositoriesModuleMetaStore {
    private static instance;
    private metadataStore;
    static readonly Instance: RepositoriesModuleMetaStore;
    readonly metadata: Map<string, RepositoriesMetadata>;
    setMetadata(key: string, repositoriesMetadata: RepositoriesMetadata): void;
}
export {};

import { ModuleConfig } from "../models/ModuleConfig";
declare class ModuleMetadata {
    target: Function;
    config: ModuleConfig;
}
export declare class ModuleMetaStore {
    private static instance;
    private metadataStore;
    static readonly Instance: ModuleMetaStore;
    readonly metadata: Map<string, ModuleMetadata>;
    setMetadata(key: string, moduleMetadata: ModuleMetadata): void;
    getMetaDataItem(key: string): ModuleMetadata | undefined;
}
export {};

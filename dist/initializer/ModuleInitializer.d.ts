import { IInitializer } from "./IInitializer";
export declare class ModuleInitializer implements IInitializer {
    private static instance;
    static readonly getInstance: ModuleInitializer;
    initialize(importedModuleList: Function[]): void;
}

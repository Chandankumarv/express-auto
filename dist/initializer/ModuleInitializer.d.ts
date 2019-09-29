import { IInitializer } from "./Initializer";
export declare class ModuleInitializer implements IInitializer {
    private static instance;
    static readonly getInstance: ModuleInitializer;
    initialize(importedModuleList: Function[]): void;
}

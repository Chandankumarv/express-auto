import { IInitializer } from "./Initializer";
export declare class ConfigurationInitializer implements IInitializer {
    private static instance;
    static readonly getInstance: ConfigurationInitializer;
    initialize(): void;
}

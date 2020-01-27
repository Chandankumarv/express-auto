import { IInitializer } from "./IInitializer";
export declare class ServiceInitializer implements IInitializer {
    private static instance;
    static readonly getInstance: ServiceInitializer;
    initialize(): void;
}

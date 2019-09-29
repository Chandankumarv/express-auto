import { IInitializer } from "./Initializer";
export declare class ServiceInitializer implements IInitializer {
    private static instance;
    static readonly getInstance: ServiceInitializer;
    initialize(): void;
}

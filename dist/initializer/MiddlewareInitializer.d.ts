import { IInitializer } from "./IInitializer";
export declare class MiddlewareInitializer implements IInitializer {
    private static instance;
    static readonly getInstance: MiddlewareInitializer;
    initialize(): void;
}

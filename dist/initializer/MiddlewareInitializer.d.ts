import { IInitializer } from "./Initializer";
export declare class MiddlewareInitializer implements IInitializer {
    private static instance;
    static readonly getInstance: MiddlewareInitializer;
    initialize(): void;
}

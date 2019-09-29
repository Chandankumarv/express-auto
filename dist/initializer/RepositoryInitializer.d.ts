import { IInitializer } from "./Initializer";
export declare class RepositoryInitializer implements IInitializer {
    private static instance;
    static readonly getInstance: RepositoryInitializer;
    initialize(): void;
}

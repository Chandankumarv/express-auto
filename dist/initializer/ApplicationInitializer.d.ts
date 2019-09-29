/// <reference types="node" />
import { ExpressAutoApplicationConfig } from "../models/ExpressAutoApplicationConfig";
import { Server } from "http";
import { IInitializer } from "./Initializer";
export declare class ApplicationInitializer implements IInitializer {
    private static instance;
    static readonly getInstance: ApplicationInitializer;
    initialize(config: ExpressAutoApplicationConfig): Server;
    private static injectDependencies;
}

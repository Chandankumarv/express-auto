import { Router } from "express";
import { IInitializer } from "./IInitializer";
import { ModuleConfig } from "../models/ModuleConfig";
export declare class RouterInitializer implements IInitializer {
    private static instance;
    static readonly getInstance: RouterInitializer;
    initialize(moduleConfig: ModuleConfig): Router;
    private intializeRoutes;
}

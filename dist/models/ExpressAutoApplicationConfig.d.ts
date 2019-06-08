import { Application } from "express";
import { ApplicationConfig } from "./ApplicationConfig.model";
export declare class ExpressAutoApplicationConfig {
    app?: Application;
    appConfig: ApplicationConfig;
    moduleImports?: Object[];
}

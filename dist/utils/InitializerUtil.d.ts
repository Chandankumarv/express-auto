/// <reference types="node" />
import { ApplicationConfig } from "../models/ApplicationConfig.model";
import http from "http";
export declare class InitializerUtil {
    private static server;
    static startApplication(appConfig: ApplicationConfig): http.Server;
    private static startServer;
    static stopServer(): Promise<boolean>;
}

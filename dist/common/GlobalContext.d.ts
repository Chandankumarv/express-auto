import { Application } from "express";
export declare class GlobalContext {
    private static instance;
    private app;
    static readonly getInstance: GlobalContext;
    readonly application: Application;
}

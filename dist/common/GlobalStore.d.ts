import express from "express";
export declare class GlobalStore {
    private static instance;
    private app;
    static readonly getInstance: GlobalStore;
    readonly application: express.Application;
}

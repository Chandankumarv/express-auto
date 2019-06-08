import express from "express";

export class GlobalStore {
  private static instance: GlobalStore;
  private app: express.Application;

  public static get getInstance(): GlobalStore {
    if (GlobalStore.instance == null) {
      GlobalStore.instance = new GlobalStore();
    }
    return GlobalStore.instance;
  }

  public get application(): express.Application {
    if (this.app == null) {
      this.app = express();
    }
    return this.app;
  }
}

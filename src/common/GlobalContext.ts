import {Application} from "express";
import express from "express";

export class GlobalContext {
  private static instance: GlobalContext;
  private app: Application;

  public static get getInstance(): GlobalContext {
    if (GlobalContext.instance == null) {
      GlobalContext.instance = new GlobalContext();
    }
    return GlobalContext.instance;
  }

  public get application(): Application {
    if (this.app == null) {
      this.app = express();
    }
    return this.app;
  }
}

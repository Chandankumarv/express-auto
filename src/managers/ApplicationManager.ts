import express from "express";
import {Application, Errback} from "express";
import { GlobalContext } from "../common/GlobalContext";
import { ApplicationConfig } from "../models/ApplicationConfig.model";
import {Server} from "http";

export class ApplicationManager {
  private static server: Server;

  public static startApplication(appConfig: ApplicationConfig): Server {
    let app: Application = GlobalContext.getInstance.application;
    this.server = this.startServer(appConfig.port, app);
    console.log(`Server listening on  ${appConfig.port}`);
    return this.server;
  }

  private static startServer(port: number, app: Application): Server {
    let server = app.listen(port, (error: Errback) => {
      if (error) {
        throw error;
      }
    });
    return server;
  }

  public static async stopServer(): Promise<boolean> {
    return new Promise((resolve: any, reject: any) => {
      if (this.server && this.server.address()) {
        this.server.close((error: Error) => {
          if (error) {
            reject(error);
          }
          resolve(true);
        });
      } else {
        resolve(false) ;
      }
    });
  }

}

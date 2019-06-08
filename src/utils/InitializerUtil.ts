import express from "express";
import { GlobalStore } from "../common/GlobalStore";
import { ApplicationConfig } from "../models/ApplicationConfig.model";
import http from "http";
import { AddressInfo } from "net";

export class InitializerUtil {
  private static server: http.Server;

  public static startApplication(appConfig: ApplicationConfig): http.Server {
    let app: express.Application = GlobalStore.getInstance.application;
    this.server = this.startServer(appConfig.port, app);
    return this.server;
  }

  private static startServer(port: number, app: express.Application): http.Server {
    let server = app.listen(port, (error: express.Errback) => {
      if (error) {
        throw error;
      }
    });
    return server;
  }

  public static async stopServer(): Promise<boolean> {
    return new Promise((resolve: any, reject: any) => {
      if (this.server.address()) {
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

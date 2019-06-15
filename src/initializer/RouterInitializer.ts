import {Router as ExpressRouter} from "express";
import { RoutesMetaStore } from "../metadataStore/RoutesMetaStore";
import { RoutersMetaStore } from "../metadataStore/RoutersMetaStore";
import { IInitializer } from "./Initializer";
import { ModuleConfig } from "../models/ModuleConfig";
import Errors from "../config/errors.json";

export class RouterInitializer implements IInitializer {

  private static instance: RouterInitializer;

  public static get getInstance(): RouterInitializer {
    return this.instance ? this.instance : new RouterInitializer();
  }

  public initialize(moduleConfig: ModuleConfig): ExpressRouter {
    let router: ExpressRouter = ExpressRouter();
    moduleConfig.routers.forEach((routerClass: Function) => {
      let routerMetadata = RoutersMetaStore.getInstance.getMetaDataItem(routerClass.name);
      if (routerMetadata) {
        let path = (routerMetadata.path || routerMetadata.path === "") ? routerMetadata.path : "/";
        let childRoutes = this.intializeRoutes(routerClass.name);
        router.use(path, childRoutes);
      } else {
        let error = new Error();
        error.name = Errors.RouterMetadataNotFound.name;
        error.message = Errors.RouterMetadataNotFound.message;
        throw error;
      }
    });
    return router;
  }

  private intializeRoutes(key: string): ExpressRouter {
    let router: ExpressRouter = ExpressRouter();
    let parentRoute = RoutesMetaStore.Instance.getMetaDataItem(key);
    if (parentRoute) {
      parentRoute.forEach((value: any, index: number) => {
        let method = value.method ? value.method : "get";
        let path = (value.path || value.path === "") ? value.path : "/";
        switch (method) {
          case "get":
            router.get(path, value.handler);
            break;
          case "post":
            router.post(path, value.handler);
            break;
          case "put":
            router.put(path, value.handler);
            break;
          case "delete":
            router.delete(path, value.handler);
            break;
          default:
            router.get(path, value.handler);
        }
      });
    }
    return router;
  }
}

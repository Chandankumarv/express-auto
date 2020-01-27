import {Router} from "express";
import { RoutesMetaStore } from "../metadataStore/RoutesMetaStore";
import { RoutersMetaStore } from "../metadataStore/RoutersMetaStore";
import { IInitializer } from "./IInitializer";
import { ModuleConfig } from "../models/ModuleConfig";
import Errors from "../config/errors.json";
import { HttpMethod } from "../enums/HttpMethod";
import { GlobalContext } from "../common/GlobalContext";

export class RouterInitializer implements IInitializer {

  private static instance: RouterInitializer;

  public static get getInstance(): RouterInitializer {
    return this.instance ? this.instance : new RouterInitializer();
  }

  public initialize(moduleConfig: ModuleConfig): Router {
    let application = GlobalContext.getInstance.application;
    moduleConfig.routers.forEach((routerClass: Function) => {
      let routerMetadata = RoutersMetaStore.getInstance.getMetaDataItem(routerClass.name);
      if (routerMetadata) {
        let path = (routerMetadata.path || routerMetadata.path === "") ? routerMetadata.path : "/";
        let childRoutes = this.intializeRoutes(routerClass.name);
        application.use(path, childRoutes);
      } else {
        let error = new Error();
        error.name = Errors.ROUTER_METADATA_NOT_FOUND.name;
        error.message = Errors.ROUTER_METADATA_NOT_FOUND.message;
        throw error;
      }
    });
    return application;
  }

  private intializeRoutes(key: string): Router {
    let router: Router = Router();
    let parentRoute = RoutesMetaStore.Instance.getMetaDataItem(key);
    if (parentRoute) {
      parentRoute.forEach((value: any, index: number) => {
        let path = (value.path || value.path === "") ? value.path : "/";
        switch (value.method) {
          case HttpMethod.GET:
            router.get(path, value.handler);
            break;
          case HttpMethod.POST:
            router.post(path, value.handler);
            break;
          case HttpMethod.PUT:
            router.put(path, value.handler);
            break;
          case HttpMethod.DELETE:
            router.delete(path, value.handler);
            break;
          default:
            let error = new Error();
            error.name = Errors.UNRECOGNIZED_HTTP_METHOD.name;
            error.message = Errors.UNRECOGNIZED_HTTP_METHOD.message;
            throw error;
        }
      });
    }
    return router;
  }
}

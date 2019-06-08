import { ExpressAutoApplicationConfig } from "../models/ExpressAutoApplicationConfig";
import {Router as ExpressRouter} from "express";
import { RoutesMetaStore } from "../metadataStore/RoutesMetaStore";
import { RoutersMetaStore } from "../metadataStore/RoutersMetaStore";
import { InitializerUtil } from "../utils/InitializerUtil";

export class Initializer {

  public static initializeApplication(config: ExpressAutoApplicationConfig) {
    // Initializer.intializeRepositories();
    // Initializer.intializeServices();
    // Initializer.initializeRouters();
    // Initializer.injectDependencies();
    InitializerUtil.startApplication(config.appConfig);
  }

  private static intializeRepositories() { }
  private static intializeServices() { }
  private static initializeRouters() {
    let router: ExpressRouter = ExpressRouter();
    RoutersMetaStore.Instance.metadata.forEach((value: any, key: string) => {
      let path = (value.path || value.path === "") ? value.path : "/";
      router.use(path, Initializer.intializeRoutes(key));
    });
  }
  private static intializeRoutes(key: string): ExpressRouter {
    let router: ExpressRouter = ExpressRouter();
    let parentRoute = RoutesMetaStore.Instance.metadata.get(key);
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
    } else {
      throw new Error("Router not registered: " + key);
    }
    return router;
  }
  private static injectDependencies() { }
}

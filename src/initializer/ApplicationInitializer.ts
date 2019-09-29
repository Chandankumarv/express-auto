import { ExpressAutoApplicationConfig } from "../models/ExpressAutoApplicationConfig";
import { InitializerUtil } from "../utils/InitializerUtil";
import {Server} from "http";
import { IInitializer } from "./Initializer";
import { ModuleInitializer } from "./ModuleInitializer";

export class ApplicationInitializer implements IInitializer {

  private static instance: ApplicationInitializer;

  public static get getInstance(): ApplicationInitializer {
    return this.instance ? this.instance : new ApplicationInitializer();
  }

  public initialize(config: ExpressAutoApplicationConfig): Server {
    ModuleInitializer.getInstance.initialize(config.moduleImports);
    // this.injectDependencies();
    return InitializerUtil.startApplication(config.appConfig);
  }

  private static injectDependencies() {
    throw new Error("Not implemented");
  }
}

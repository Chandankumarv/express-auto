import { ExpressAutoApplicationConfig } from "../models/ExpressAutoApplicationConfig";
import { ApplicationManager } from "../managers/ApplicationManager";
import {Server} from "http";
import { IInitializer } from "./IInitializer";
import { ModuleInitializer } from "./ModuleInitializer";

export class ApplicationInitializer implements IInitializer {

  private static instance: ApplicationInitializer;

  public static get getInstance(): ApplicationInitializer {
    return this.instance ? this.instance : new ApplicationInitializer();
  }

  public initialize(config: ExpressAutoApplicationConfig): Server {
    ModuleInitializer.getInstance.initialize(config.moduleImports);
    // this.injectDependencies();
    return ApplicationManager.startApplication(config.appConfig);
  }

  private static injectDependencies() {
    throw new Error("Not implemented");
  }
}

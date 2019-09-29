import { Application } from "express";
import { ApplicationConfig } from "./ApplicationConfig.model";

export class ExpressAutoApplicationConfig {
  appConfig: ApplicationConfig;
  moduleImports?: Function[];
}

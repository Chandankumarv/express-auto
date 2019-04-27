import { ExpressAutoApplicationConfig } from "../models/ExpressAutoApplicationConfig";

export class Initializer {

  public static initializeApplication(config: ExpressAutoApplicationConfig) {
    Initializer.intializeRepositories();
    Initializer.intializeServices();
    Initializer.intializeRoutes();
    Initializer.injectDependencies();
  }

  private static intializeRepositories() { }
  private static intializeServices() { }
  private static intializeRoutes() { }
  private static injectDependencies() { }
}

import { IInitializer } from "./Initializer";
import { RouterInitializer } from "./RouterInitializer";

export class ModuleInitializer implements IInitializer {

  private static instance: ModuleInitializer;

  public static get getInstance(): ModuleInitializer {
    return this.instance ? this.instance : new ModuleInitializer();
  }

  public initialize(importedModuleList: Object[]) {
    // RepositoryInitializer.intializeRepositories();
    // ServiceInitializer.intializeServices();
    RouterInitializer.getInstance.initialize();
  }
}

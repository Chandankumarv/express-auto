import { IInitializer } from "./Initializer";
import { RouterInitializer } from "./RouterInitializer";
import { ModuleMetaStore } from "../metadataStore/ModuleMetaStore";
import { ModuleConfig } from "../models/ModuleConfig";
import Errors from "../config/errors.json";

export class ModuleInitializer implements IInitializer {

  private static instance: ModuleInitializer;

  public static get getInstance(): ModuleInitializer {
    return this.instance ? this.instance : new ModuleInitializer();
  }

  public initialize(importedModuleList: Function[]) {
    if (importedModuleList && importedModuleList.length > 0) {
      importedModuleList.forEach((module: Function) => {
        let moduleMetaData = ModuleMetaStore.Instance.getMetaDataItem(module.name);
        if (moduleMetaData) {
          let moduleConfig: ModuleConfig;
          // RepositoryInitializer.intializeRepositories();
          // ServiceInitializer.intializeServices();
          RouterInitializer.getInstance.initialize(moduleConfig);
        } else {
          let error: Error = new Error();
          error.name = Errors.ModuleMetadataNotFound.name;
          error.message = Errors.ModuleMetadataNotFound.message;
          throw error;
        }
      });
    }
  }
}

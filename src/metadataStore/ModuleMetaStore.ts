import { ModuleConfig } from "../models/ModuleConfig";

class ModuleMetadata {
  target: Function;
  config: ModuleConfig;
}

export class ModuleMetaStore {

  private static instance: ModuleMetaStore;

  private metadataStore = new Map<string, ModuleMetadata>();

  static get Instance(): ModuleMetaStore {
    this.instance = this.instance ? this.instance : new ModuleMetaStore();
    return this.instance;
  }

  get metadata() {
    return this.metadataStore;
  }

  setMetadata(key: string, moduleMetadata: ModuleMetadata) {
    moduleMetadata.config.name = key;
    this.metadataStore.set(key, moduleMetadata);
  }

  getMetaDataItem(key: string): ModuleMetadata | undefined {
    return this.metadataStore.get(key);
  }
}

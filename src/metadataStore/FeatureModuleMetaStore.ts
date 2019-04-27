class FeatureMetadata {
  target: Function;
}

export class FeatureModuleMetaStore {
  private static instance: FeatureModuleMetaStore;

  private metadataStore = new Map<string, FeatureMetadata>();

  static get Instance(): FeatureModuleMetaStore {
    return this.instance ?
    this.instance : new FeatureModuleMetaStore();
  }

  get metadata() {
    return this.metadataStore;
  }

  setMetadata(key: string, featureMetadata: FeatureMetadata) {
    this.metadataStore.set(key, featureMetadata);
  }
}

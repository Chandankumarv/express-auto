class ServicesMetadata {
  target: Function;
}

export class ServicesMetaStore {

  private static instance: ServicesMetaStore;

  private metadataStore = new Map<string, ServicesMetadata>();

  static get Instance(): ServicesMetaStore {
    return this.instance ?
    this.instance : new ServicesMetaStore();
  }

  get metadata() {
    return this.metadataStore;
  }

  setMetadata(key: string, servicesMetadata: ServicesMetadata) {
    this.metadataStore.set(key, servicesMetadata);
  }
}

class RoutersMetadata {
  target: Function;
  path?: string;
}

export class RoutersMetaStore {

  private static instance: RoutersMetaStore;

  private metadataStore = new Map<string, RoutersMetadata>();

  static get getInstance(): RoutersMetaStore {
    this.instance = this.instance ? this.instance : new RoutersMetaStore();
    return this.instance;
  }

  get metadata() {
    return this.metadataStore;
  }

  setMetadata(key: string, routersMetadata: RoutersMetadata) {
    this.metadataStore.set(key, routersMetadata);
  }

  getMetaDataItem(key: string): RoutersMetadata {
    return this.metadataStore.get(key);
  }
}

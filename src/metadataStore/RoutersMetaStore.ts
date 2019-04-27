class RoutersMetadata {
  target: Function;
  path?: string;
}

export class RoutersMetaStore {

  private static instance: RoutersMetaStore;

  private metadataStore = new Map<string, RoutersMetadata>();

  static get Instance(): RoutersMetaStore {
    return this.instance ?
    this.instance : new RoutersMetaStore();
  }

  get metadata() {
    return this.metadataStore;
  }

  setMetadata(key: string, routersMetadata: RoutersMetadata) {
    this.metadataStore.set(key, routersMetadata);
  }
}

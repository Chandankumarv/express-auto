class RoutesMetadata {
  target: Function;
  method?: string;
  path?: string;
  handler: any;
}

export class RoutesMetaStore {

  private static instance: RoutesMetaStore;

  private metadataStore = new Map<string, RoutesMetadata>();

  static get Instance(): RoutesMetaStore {
    return this.instance ?
    this.instance : new RoutesMetaStore();
  }

  get metadata() {
    return this.metadataStore;
  }

  setMetadata(key: string, routesMetadata: RoutesMetadata) {
    this.metadataStore.set(key, routesMetadata);
  }
}

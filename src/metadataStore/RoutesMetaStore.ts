class RoutesMetadata {
  target: Function;
  method?: string;
  path?: string;
  handler: any;
}

export class RoutesMetaStore {

  private static instance: RoutesMetaStore;

  private metadataStore = new Map<string, RoutesMetadata[]>();

  static get Instance(): RoutesMetaStore {
    this.instance = this.instance ? this.instance : new RoutesMetaStore();
    return this.instance;
  }

  get metadata() {
    return this.metadataStore;
  }

  setMetadata(key: string, routesMetadata: RoutesMetadata) {
    const metadata = this.metadataStore.get(key) || [];
    metadata.push(routesMetadata);
  }

  getMetaDataItem(key: string): RoutesMetadata[] {
    return this.metadataStore.get(key) || [];
  }
}

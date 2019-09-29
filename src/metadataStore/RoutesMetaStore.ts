import { HttpMethod } from "../enums/HttpMethod";

class RoutesMetadata {
  target: Object;
  method?: HttpMethod;
  path?: string;
  handler: Function;
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
    this.metadataStore.set(key, metadata);
  }

  getMetaDataItem(key: string): RoutesMetadata[] {
    return this.metadataStore.get(key) || [];
  }
}

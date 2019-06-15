class InjectionsMetadata {
  target: Object;
  propertyKey: string | symbol;
  resolver?: string;
}

export class InjectionsMetaStore {

  private static instance: InjectionsMetaStore;

  private metadataStore = new Map<string, InjectionsMetadata[]>();

  static get Instance(): InjectionsMetaStore {
    this.instance = this.instance ? this.instance : new InjectionsMetaStore();
    return this.instance;
  }

  get metadata() {
    return this.metadataStore;
  }

  setMetadata(key: string, injectionsMetadata: InjectionsMetadata) {
    const metadata = this.metadataStore.get(key) || [];
    metadata.push(injectionsMetadata);
  }
}

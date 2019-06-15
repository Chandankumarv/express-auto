class RepositoriesMetadata {
  target: Function;
}

export class RepositoriesModuleMetaStore {

  private static instance: RepositoriesModuleMetaStore;

  private metadataStore = new Map<string, RepositoriesMetadata>();

  static get Instance(): RepositoriesModuleMetaStore {
    this.instance = this.instance ? this.instance : new RepositoriesModuleMetaStore();
    return this.instance;
  }

  get metadata() {
    return this.metadataStore;
  }

  setMetadata(key: string, repositoriesMetadata: RepositoriesMetadata) {
    this.metadataStore.set(key, repositoriesMetadata);
  }
}

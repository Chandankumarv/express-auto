"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RepositoriesMetadata {
}
class RepositoriesModuleMetaStore {
    constructor() {
        this.metadataStore = new Map();
    }
    static get Instance() {
        this.instance = this.instance ? this.instance : new RepositoriesModuleMetaStore();
        return this.instance;
    }
    get metadata() {
        return this.metadataStore;
    }
    setMetadata(key, repositoriesMetadata) {
        this.metadataStore.set(key, repositoriesMetadata);
    }
}
exports.RepositoriesModuleMetaStore = RepositoriesModuleMetaStore;
//# sourceMappingURL=RepositoryMetaStore.js.map
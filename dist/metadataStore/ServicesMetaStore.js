"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServicesMetadata {
}
class ServicesMetaStore {
    constructor() {
        this.metadataStore = new Map();
    }
    static get Instance() {
        return this.instance ?
            this.instance : new ServicesMetaStore();
    }
    get metadata() {
        return this.metadataStore;
    }
    setMetadata(key, servicesMetadata) {
        this.metadataStore.set(key, servicesMetadata);
    }
}
exports.ServicesMetaStore = ServicesMetaStore;
//# sourceMappingURL=ServicesMetaStore.js.map
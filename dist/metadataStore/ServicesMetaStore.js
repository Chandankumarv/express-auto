"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServicesMetadata {
}
class ServicesMetaStore {
    constructor() {
        this.metadataStore = new Map();
    }
    static get Instance() {
        this.instance = this.instance ? this.instance : new ServicesMetaStore();
        return this.instance;
    }
    get metadata() {
        return this.metadataStore;
    }
    setMetadata(key, servicesMetadata) {
        this.metadataStore.set(key, servicesMetadata);
    }
}
exports.ServicesMetaStore = ServicesMetaStore;

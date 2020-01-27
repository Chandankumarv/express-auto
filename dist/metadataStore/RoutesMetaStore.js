"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoutesMetadata {
}
class RoutesMetaStore {
    constructor() {
        this.metadataStore = new Map();
    }
    static get Instance() {
        this.instance = this.instance ? this.instance : new RoutesMetaStore();
        return this.instance;
    }
    get metadata() {
        return this.metadataStore;
    }
    setMetadata(key, routesMetadata) {
        const metadata = this.metadataStore.get(key) || [];
        metadata.push(routesMetadata);
        this.metadataStore.set(key, metadata);
    }
    getMetaDataItem(key) {
        return this.metadataStore.get(key) || [];
    }
}
exports.RoutesMetaStore = RoutesMetaStore;

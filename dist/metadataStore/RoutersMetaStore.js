"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoutersMetadata {
}
class RoutersMetaStore {
    constructor() {
        this.metadataStore = new Map();
    }
    static get getInstance() {
        this.instance = this.instance ? this.instance : new RoutersMetaStore();
        return this.instance;
    }
    get metadata() {
        return this.metadataStore;
    }
    setMetadata(key, routersMetadata) {
        this.metadataStore.set(key, routersMetadata);
    }
    getMetaDataItem(key) {
        return this.metadataStore.get(key);
    }
}
exports.RoutersMetaStore = RoutersMetaStore;

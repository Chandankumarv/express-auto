"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModuleMetadata {
}
class ModuleMetaStore {
    constructor() {
        this.metadataStore = new Map();
    }
    static get Instance() {
        this.instance = this.instance ? this.instance : new ModuleMetaStore();
        return this.instance;
    }
    get metadata() {
        return this.metadataStore;
    }
    setMetadata(key, moduleMetadata) {
        moduleMetadata.config.name = key;
        this.metadataStore.set(key, moduleMetadata);
    }
    getMetaDataItem(key) {
        return this.metadataStore.get(key);
    }
}
exports.ModuleMetaStore = ModuleMetaStore;

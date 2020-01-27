"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InjectionsMetadata {
}
class InjectionsMetaStore {
    constructor() {
        this.metadataStore = new Map();
    }
    static get Instance() {
        this.instance = this.instance ? this.instance : new InjectionsMetaStore();
        return this.instance;
    }
    get metadata() {
        return this.metadataStore;
    }
    setMetadata(key, injectionsMetadata) {
        const metadata = this.metadataStore.get(key) || [];
        metadata.push(injectionsMetadata);
    }
}
exports.InjectionsMetaStore = InjectionsMetaStore;

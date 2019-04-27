"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InjectionsMetadata {
}
class InjectionsMetaStore {
    constructor() {
        this.metadataStore = new Map();
    }
    static get Instance() {
        return this.instance ?
            this.instance : new InjectionsMetaStore();
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
//# sourceMappingURL=InjectionsMetaStore.js.map
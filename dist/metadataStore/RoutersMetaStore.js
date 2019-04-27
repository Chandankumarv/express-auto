"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoutersMetadata {
}
class RoutersMetaStore {
    constructor() {
        this.metadataStore = new Map();
    }
    static get Instance() {
        return this.instance ?
            this.instance : new RoutersMetaStore();
    }
    get metadata() {
        return this.metadataStore;
    }
    setMetadata(key, routersMetadata) {
        this.metadataStore.set(key, routersMetadata);
    }
}
exports.RoutersMetaStore = RoutersMetaStore;
//# sourceMappingURL=RoutersMetaStore.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoutesMetadata {
}
class RoutesMetaStore {
    constructor() {
        this.metadataStore = new Map();
    }
    static get Instance() {
        return this.instance ?
            this.instance : new RoutesMetaStore();
    }
    get metadata() {
        return this.metadataStore;
    }
    setMetadata(key, routesMetadata) {
        const metadata = this.metadataStore.get(key) || [];
        metadata.push(routesMetadata);
    }
}
exports.RoutesMetaStore = RoutesMetaStore;
//# sourceMappingURL=RoutesMetaStore.js.map
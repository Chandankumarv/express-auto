"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FeatureMetadata {
}
class FeatureModuleMetaStore {
    constructor() {
        this.metadataStore = new Map();
    }
    static get Instance() {
        return this.instance ?
            this.instance : new FeatureModuleMetaStore();
    }
    get metadata() {
        return this.metadataStore;
    }
    setMetadata(key, featureMetadata) {
        this.metadataStore.set(key, featureMetadata);
    }
}
exports.FeatureModuleMetaStore = FeatureModuleMetaStore;
//# sourceMappingURL=FeatureModuleMetaStore.js.map
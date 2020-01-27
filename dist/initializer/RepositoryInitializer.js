"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RepositoryInitializer {
    static get getInstance() {
        return this.instance ? this.instance : new RepositoryInitializer();
    }
    initialize() {
        throw new Error("Not implemented");
    }
}
exports.RepositoryInitializer = RepositoryInitializer;

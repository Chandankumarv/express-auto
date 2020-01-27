"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MiddlewareInitializer {
    static get getInstance() {
        return this.instance ? this.instance : new MiddlewareInitializer();
    }
    initialize() {
        throw new Error("Not implemented");
    }
}
exports.MiddlewareInitializer = MiddlewareInitializer;

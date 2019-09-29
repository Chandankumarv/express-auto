"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceInitializer {
    static get getInstance() {
        return this.instance ? this.instance : new ServiceInitializer();
    }
    initialize() {
        throw new Error("Not implemented");
    }
}
exports.ServiceInitializer = ServiceInitializer;
//# sourceMappingURL=ServiceInitializer.js.map
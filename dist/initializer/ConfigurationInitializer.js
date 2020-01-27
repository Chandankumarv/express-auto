"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigurationInitializer {
    static get getInstance() {
        return this.instance ? this.instance : new ConfigurationInitializer();
    }
    initialize() {
        throw new Error("Not implemented");
    }
}
exports.ConfigurationInitializer = ConfigurationInitializer;

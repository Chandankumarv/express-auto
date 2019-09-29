"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RouterInitializer_1 = require("./RouterInitializer");
const ModuleMetaStore_1 = require("../metadataStore/ModuleMetaStore");
const errors_json_1 = __importDefault(require("../config/errors.json"));
class ModuleInitializer {
    static get getInstance() {
        return this.instance ? this.instance : new ModuleInitializer();
    }
    initialize(importedModuleList) {
        if (importedModuleList && importedModuleList.length > 0) {
            importedModuleList.forEach((module) => {
                let moduleMetaData = ModuleMetaStore_1.ModuleMetaStore.Instance.getMetaDataItem(module.name);
                if (moduleMetaData) {
                    let moduleConfig = moduleMetaData.config;
                    // RepositoryInitializer.intializeRepositories();
                    // ServiceInitializer.intializeServices();
                    RouterInitializer_1.RouterInitializer.getInstance.initialize(moduleConfig);
                }
                else {
                    let error = new Error();
                    error.name = errors_json_1.default.MODULE_METADATA_NOT_FOUND.name;
                    error.message = errors_json_1.default.MODULE_METADATA_NOT_FOUND.message;
                    throw error;
                }
            });
        }
    }
}
exports.ModuleInitializer = ModuleInitializer;
//# sourceMappingURL=ModuleInitializer.js.map
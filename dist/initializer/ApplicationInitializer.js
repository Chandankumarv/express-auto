"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationManager_1 = require("../managers/ApplicationManager");
const ModuleInitializer_1 = require("./ModuleInitializer");
class ApplicationInitializer {
    static get getInstance() {
        return this.instance ? this.instance : new ApplicationInitializer();
    }
    initialize(config) {
        ModuleInitializer_1.ModuleInitializer.getInstance.initialize(config.moduleImports);
        // this.injectDependencies();
        return ApplicationManager_1.ApplicationManager.startApplication(config.appConfig);
    }
    static injectDependencies() {
        throw new Error("Not implemented");
    }
}
exports.ApplicationInitializer = ApplicationInitializer;
//# sourceMappingURL=ApplicationInitializer.js.map
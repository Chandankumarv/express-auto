"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Initializer {
    static initializeApplication(config) {
        Initializer.intializeRepositories();
        Initializer.intializeServices();
        Initializer.intializeRoutes();
        Initializer.injectDependencies();
    }
    static intializeRepositories() { }
    static intializeServices() { }
    static intializeRoutes() { }
    static injectDependencies() { }
}
exports.Initializer = Initializer;
//# sourceMappingURL=Initializer.js.map
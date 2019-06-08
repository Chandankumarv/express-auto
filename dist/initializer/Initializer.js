"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RoutesMetaStore_1 = require("../metadataStore/RoutesMetaStore");
const RoutersMetaStore_1 = require("../metadataStore/RoutersMetaStore");
const InitializerUtil_1 = require("../utils/InitializerUtil");
class Initializer {
    static initializeApplication(config) {
        // Initializer.intializeRepositories();
        // Initializer.intializeServices();
        // Initializer.initializeRouters();
        // Initializer.injectDependencies();
        InitializerUtil_1.InitializerUtil.startApplication(config.appConfig);
    }
    static intializeRepositories() { }
    static intializeServices() { }
    static initializeRouters() {
        let router = express_1.Router();
        RoutersMetaStore_1.RoutersMetaStore.Instance.metadata.forEach((value, key) => {
            let path = (value.path || value.path === "") ? value.path : "/";
            router.use(path, Initializer.intializeRoutes(key));
        });
    }
    static intializeRoutes(key) {
        let router = express_1.Router();
        let parentRoute = RoutesMetaStore_1.RoutesMetaStore.Instance.metadata.get(key);
        if (parentRoute) {
            parentRoute.forEach((value, index) => {
                let method = value.method ? value.method : "get";
                let path = (value.path || value.path === "") ? value.path : "/";
                switch (method) {
                    case "get":
                        router.get(path, value.handler);
                        break;
                    case "post":
                        router.post(path, value.handler);
                        break;
                    case "put":
                        router.put(path, value.handler);
                        break;
                    case "delete":
                        router.delete(path, value.handler);
                        break;
                    default:
                        router.get(path, value.handler);
                }
            });
        }
        else {
            throw new Error("Router not registered: " + key);
        }
        return router;
    }
    static injectDependencies() { }
}
exports.Initializer = Initializer;
//# sourceMappingURL=Initializer.js.map
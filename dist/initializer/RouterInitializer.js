"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RoutesMetaStore_1 = require("../metadataStore/RoutesMetaStore");
const RoutersMetaStore_1 = require("../metadataStore/RoutersMetaStore");
const errors_json_1 = __importDefault(require("../config/errors.json"));
const HttpMethod_1 = require("../enums/HttpMethod");
const GlobalContext_1 = require("../common/GlobalContext");
class RouterInitializer {
    static get getInstance() {
        return this.instance ? this.instance : new RouterInitializer();
    }
    initialize(moduleConfig) {
        let application = GlobalContext_1.GlobalContext.getInstance.application;
        moduleConfig.routers.forEach((routerClass) => {
            let routerMetadata = RoutersMetaStore_1.RoutersMetaStore.getInstance.getMetaDataItem(routerClass.name);
            if (routerMetadata) {
                let path = (routerMetadata.path || routerMetadata.path === "") ? routerMetadata.path : "/";
                let childRoutes = this.intializeRoutes(routerClass.name);
                application.use(path, childRoutes);
            }
            else {
                let error = new Error();
                error.name = errors_json_1.default.ROUTER_METADATA_NOT_FOUND.name;
                error.message = errors_json_1.default.ROUTER_METADATA_NOT_FOUND.message;
                throw error;
            }
        });
        return application;
    }
    intializeRoutes(key) {
        let router = express_1.Router();
        let parentRoute = RoutesMetaStore_1.RoutesMetaStore.Instance.getMetaDataItem(key);
        if (parentRoute) {
            parentRoute.forEach((value, index) => {
                let path = (value.path || value.path === "") ? value.path : "/";
                switch (value.method) {
                    case HttpMethod_1.HttpMethod.GET:
                        router.get(path, value.handler);
                        break;
                    case HttpMethod_1.HttpMethod.POST:
                        router.post(path, value.handler);
                        break;
                    case HttpMethod_1.HttpMethod.PUT:
                        router.put(path, value.handler);
                        break;
                    case HttpMethod_1.HttpMethod.DELETE:
                        router.delete(path, value.handler);
                        break;
                    default:
                        let error = new Error();
                        error.name = errors_json_1.default.UNRECOGNIZED_HTTP_METHOD.name;
                        error.message = errors_json_1.default.UNRECOGNIZED_HTTP_METHOD.message;
                        throw error;
                }
            });
        }
        return router;
    }
}
exports.RouterInitializer = RouterInitializer;

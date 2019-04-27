"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FeatureModuleMetaStore_1 = require("../metadataStore/FeatureModuleMetaStore");
const Initializer_1 = require("../initializer/Initializer");
const ServicesMetaStore_1 = require("../metadataStore/ServicesMetaStore");
const RepositoryMetaStore_1 = require("../metadataStore/RepositoryMetaStore");
const InjectionsMetaStore_1 = require("../metadataStore/InjectionsMetaStore");
const RoutesMetaStore_1 = require("../metadataStore/RoutesMetaStore");
const RoutersMetaStore_1 = require("../metadataStore/RoutersMetaStore");
function ExpressAutoApplication(config) {
    return (target) => {
        Initializer_1.Initializer.initializeApplication(config);
    };
}
exports.ExpressAutoApplication = ExpressAutoApplication;
function FeatureModule(config) {
    return (target) => {
        FeatureModuleMetaStore_1.FeatureModuleMetaStore.Instance.setMetadata(target.name, {
            target: target
        });
    };
}
exports.FeatureModule = FeatureModule;
function Router(path) {
    return (target) => {
        RoutersMetaStore_1.RoutersMetaStore.Instance.setMetadata(target.name, {
            target: target,
            path: path
        });
    };
}
exports.Router = Router;
function Service(resolver) {
    return (target) => {
        ServicesMetaStore_1.ServicesMetaStore.Instance.setMetadata(target.name, {
            target: target
        });
    };
}
exports.Service = Service;
function Repository(resolver) {
    return (target) => {
        RepositoryMetaStore_1.RepositoriesModuleMetaStore.Instance.setMetadata(target.name, {
            target: target
        });
    };
}
exports.Repository = Repository;
function Route(method, path) {
    return (target, propertyKey, propertyDescriptor) => {
        RoutesMetaStore_1.RoutesMetaStore.Instance.setMetadata(target.name, {
            target: target,
            method: method,
            path: path,
            handler: propertyDescriptor
        });
        return propertyDescriptor;
    };
}
exports.Route = Route;
function Inject(resolver) {
    return (target, propertyKey) => {
        InjectionsMetaStore_1.InjectionsMetaStore.Instance.setMetadata(target.constructor.name, {
            target: target,
            propertyKey: propertyKey,
            resolver: resolver
        });
    };
}
exports.Inject = Inject;
//# sourceMappingURL=Decorators.js.map
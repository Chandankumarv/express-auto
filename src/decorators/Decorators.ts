import { ApplicationInitializer } from "../initializer/ApplicationInitializer";
import { ServicesMetaStore } from "../metadataStore/ServicesMetaStore";
import { RepositoriesModuleMetaStore } from "../metadataStore/RepositoryMetaStore";
import { InjectionsMetaStore } from "../metadataStore/InjectionsMetaStore";
import { ExpressAutoApplicationConfig } from "../models/ExpressAutoApplicationConfig";
import { RoutesMetaStore } from "../metadataStore/RoutesMetaStore";
import { RoutersMetaStore } from "../metadataStore/RoutersMetaStore";
import { ModuleConfig } from "../models/ModuleConfig";
import { ModuleMetaStore } from "../metadataStore/ModuleMetaStore";

export function ExpressAutoApplication(config: ExpressAutoApplicationConfig) {
  return (target: Function) => {
    ApplicationInitializer.getInstance.initialize(config);
  };
}

export function Module(config: ModuleConfig) {
  return (target: Function) => {
    ModuleMetaStore.Instance.setMetadata(target.name, {
      target: target,
      config: config
    });
  };
}

export function Router(path?: string) {
  return (target: Function) => {
    RoutersMetaStore.getInstance.setMetadata(target.name, {
      target: target,
      path: path
    });
  };
}

export function Service(resolver?: string) {
  return (target: Function) => {
    ServicesMetaStore.Instance.setMetadata(target.name, {
      target: target
    });
  };
}

export function Repository(resolver?: string) {
  return (target: Function) => {
    RepositoriesModuleMetaStore.Instance.setMetadata(target.name, {
      target: target
    });
  };
}

export function Route(method?: string, path?: string) {
  return <T>(target: Function, propertyKey: string | symbol,
             propertyDescriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> => {
    RoutesMetaStore.Instance.setMetadata(target.name, {
      target: target,
      method: method,
      path: path,
      handler: propertyDescriptor
    });
    return propertyDescriptor;
  };
}

export function Inject(resolver?: string) {
  return (target: Object, propertyKey: string | symbol) => {
    InjectionsMetaStore.Instance.setMetadata(target.constructor.name, {
      target: target,
      propertyKey: propertyKey,
      resolver: resolver
    });
  };
}

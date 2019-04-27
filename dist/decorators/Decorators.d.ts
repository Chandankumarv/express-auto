import { ExpressAutoApplicationConfig } from "../models/ExpressAutoApplicationConfig";
import { FeatureModuleConfig } from "../models/FeatureModuleConfig";
export declare function ExpressAutoApplication(config: ExpressAutoApplicationConfig): (target: Function) => void;
export declare function FeatureModule(config: FeatureModuleConfig): (target: Function) => void;
export declare function Router(path?: string): (target: Function) => void;
export declare function Service(resolver?: string): (target: Function) => void;
export declare function Repository(resolver?: string): (target: Function) => void;
export declare function Route(method?: string, path?: string): <T>(target: Function, propertyKey: string | symbol, propertyDescriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T>;
export declare function Inject(resolver?: string): (target: Object, propertyKey: string | symbol) => void;

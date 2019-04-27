import { ExpressAutoApplicationConfig } from "../models/ExpressAutoApplicationConfig";
export declare class Initializer {
    static initializeApplication(config: ExpressAutoApplicationConfig): void;
    private static intializeRepositories;
    private static intializeServices;
    private static initializeRouters;
    private static intializeRoutes;
    private static injectDependencies;
}

import { IInitializer } from "./Initializer";

export class ConfigurationInitializer implements IInitializer {
  private static instance: ConfigurationInitializer;

  public static get getInstance(): ConfigurationInitializer {
    return this.instance ? this.instance : new ConfigurationInitializer();
  }
  public initialize() {
    throw new Error("Not implemented");
  }
}

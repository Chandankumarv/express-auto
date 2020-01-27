import { IInitializer } from "./IInitializer";

export class ServiceInitializer implements IInitializer {

  private static instance: ServiceInitializer;

  public static get getInstance(): ServiceInitializer {
    return this.instance ? this.instance : new ServiceInitializer();
  }

  public initialize() {
    throw new Error("Not implemented");
  }

}

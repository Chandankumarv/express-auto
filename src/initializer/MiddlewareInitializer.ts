import { IInitializer } from "./Initializer";

export class MiddlewareInitializer implements IInitializer {

  private static instance: MiddlewareInitializer;

  public static get getInstance(): MiddlewareInitializer {
    return this.instance ? this.instance : new MiddlewareInitializer();
  }

  public initialize() {
    throw new Error("Not implemented");
  }
}

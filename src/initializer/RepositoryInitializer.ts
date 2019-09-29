import { IInitializer } from "./Initializer";

export class RepositoryInitializer implements IInitializer {

  private static instance: RepositoryInitializer;

  public static get getInstance(): RepositoryInitializer {
    return this.instance ? this.instance : new RepositoryInitializer();
  }
  public initialize() {
    throw new Error("Not implemented");
  }

}

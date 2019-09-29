import {describe, it} from "mocha";
import {expect} from "chai";
import {ModuleInitializer} from "../../src/initializer/ModuleInitializer";
import Errors from "../../src/config/errors.json";
import { TestModule1, TestModule2 } from "./fixtures/moduleInitializer/TestModules";

describe("@ModuleInitializerTest ->", async () => {
  describe("@initialize()", async () => {
    it("should throw ModuleMetadataNotFound if imported module metadata is not found", () => {
      let moduleImports = [
        TestModule1,
        TestModule2
      ];
      expect(() => ModuleInitializer.getInstance.initialize(moduleImports))
        .to.throw(Error).with.property("name", Errors.ModuleMetadataNotFound.name);
    });
  });
});

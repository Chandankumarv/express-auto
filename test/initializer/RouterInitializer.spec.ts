import {describe, it} from "mocha";
import {expect} from "chai";
import { RouterInitializer } from "../../src/initializer/RouterInitializer";
import { ModuleConfig } from "../../src/models/ModuleConfig";
import { TestRouter1, TestRouter2 } from "./fixtures/routerInitializer/TestRouters";
import Errors from "../../src/config/errors.json";
import { RoutersMetaStore } from "../../src/metadataStore/RoutersMetaStore";

describe("@RouterInitializerTest -> ", async () => {
  describe("@initialize() -> ", async () => {
    it("should throw RouterMetadataNotFound error if imported router metadata is not found", () => {
      let moduleConfig: ModuleConfig = new ModuleConfig();
      moduleConfig.name = "TestRouterModule1";
      moduleConfig.routers = [
        TestRouter1,
        TestRouter2
      ];
      expect(() => RouterInitializer.getInstance.initialize(moduleConfig))
        .to.throw(Error).with.property("name", Errors.RouterMetadataNotFound.name);
    });

    it("should register routes to root path", () => {
      let moduleConfig: ModuleConfig = new ModuleConfig();
      moduleConfig.name = "TestRouterModule1";
      moduleConfig.routers = [
        TestRouter1,
        TestRouter2
      ];
      RoutersMetaStore.getInstance.setMetadata(TestRouter1.name, {
        target: TestRouter1,
        path: "test-route1"
      });
      RoutersMetaStore.getInstance.setMetadata(TestRouter2.name, {
        target: TestRouter2
      });
      let router = RouterInitializer.getInstance.initialize(moduleConfig);
      expect(router.stack).to.have.lengthOf(2);
    });

    afterEach(async () => {
      RoutersMetaStore.getInstance.metadata.clear();
    });
  });
});

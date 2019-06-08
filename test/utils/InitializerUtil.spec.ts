import {describe, it} from "mocha";
import {expect} from "chai";
import {InitializerUtil} from "../../src/utils/InitializerUtil";
import { ApplicationConfig } from "../../src/models/ApplicationConfig.model";
import http from "http";
import { AddressInfo } from "net";

describe("@InitializerUtil Test -> ", async () => {
  describe("@startApplication Test ->", async () => {

    it("should start the application on specified port", async () => {
      let appConfig: ApplicationConfig = new ApplicationConfig();
      appConfig.port = 3000;
      let server: http.Server = InitializerUtil.startApplication(appConfig);
      expect((server.address() as AddressInfo).port).to.be.equal(appConfig.port);
    });

    afterEach(async () => {
      InitializerUtil.stopServer();
    });
  });

  describe("@stopServer Test ->", async () => {
    it("should stop the server and return true if running", async () => {
      let appConfig: ApplicationConfig = new ApplicationConfig();
      appConfig.port = 3000;
      InitializerUtil.startApplication(appConfig);
      let serverStopStatus: boolean = await InitializerUtil.stopServer();
      expect(serverStopStatus).to.be.equal(true);
    });

    it("should return false if not running", async () => {
      let serverStopStatus: boolean = await InitializerUtil.stopServer();
      expect(serverStopStatus).to.be.equal(false);
    });
  });

});

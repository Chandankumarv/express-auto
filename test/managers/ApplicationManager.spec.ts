import {describe, it} from "mocha";
import {expect} from "chai";
import {ApplicationManager} from "../../src/managers/ApplicationManager";
import { ApplicationConfig } from "../../src/models/ApplicationConfig.model";
import { Server } from "http";
import { AddressInfo } from "net";

describe("@ApplicationManager Test -> ", async () => {
  describe("@startApplication Test ->", async () => {

    it("should start the application on specified port", async () => {
      let appConfig: ApplicationConfig = new ApplicationConfig();
      appConfig.port = 3000;
      let server: Server = ApplicationManager.startApplication(appConfig);
      expect((server.address() as AddressInfo).port).to.be.equal(appConfig.port);
    });

    afterEach(async () => {
      ApplicationManager.stopServer();
    });
  });

  describe("@stopServer Test ->", async () => {
    it("should stop the server and return true if running", async () => {
      let appConfig: ApplicationConfig = new ApplicationConfig();
      appConfig.port = 3000;
      ApplicationManager.startApplication(appConfig);
      let serverStopStatus: boolean = await ApplicationManager.stopServer();
      expect(serverStopStatus).to.be.equal(true);
    });

    it("should return false if not running", async () => {
      let serverStopStatus: boolean = await ApplicationManager.stopServer();
      expect(serverStopStatus).to.be.equal(false);
    });
  });

});

import {describe, it} from "mocha";
import {expect} from "chai";
import http from "http";
import { ApplicationInitializer } from "../../src/initializer/ApplicationInitializer";
import { ExpressAutoApplicationConfig } from "../../src/models/ExpressAutoApplicationConfig";
import ApplicationConfigJson from "../application.config.json";
import { AddressInfo } from "net";
import { InitializerUtil } from "../../src/utils/InitializerUtil";

describe("@ApplicationInitializer Test -> ", async () => {
  it("should start the application with the port fetched from config file", async () => {
    expect(true).to.be.equal(true);
    let expressApplicationConfig: ExpressAutoApplicationConfig = new ExpressAutoApplicationConfig();
    expressApplicationConfig.appConfig = ApplicationConfigJson;
    let server: http.Server = ApplicationInitializer.getInstance.initialize(expressApplicationConfig);
    expect((server.address() as AddressInfo).port).to.be.equal(expressApplicationConfig.appConfig.port);
  });

  afterEach(async () => {
    InitializerUtil.stopServer();
  });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class GlobalStore {
    static get getInstance() {
        if (GlobalStore.instance == null) {
            GlobalStore.instance = new GlobalStore();
        }
        return GlobalStore.instance;
    }
    get application() {
        if (this.app == null) {
            this.app = express_1.default();
        }
        return this.app;
    }
}
exports.GlobalStore = GlobalStore;
//# sourceMappingURL=GlobalStore.js.map
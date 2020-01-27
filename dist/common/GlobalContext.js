"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class GlobalContext {
    static get getInstance() {
        if (GlobalContext.instance == null) {
            GlobalContext.instance = new GlobalContext();
        }
        return GlobalContext.instance;
    }
    get application() {
        if (this.app == null) {
            this.app = express_1.default();
        }
        return this.app;
    }
}
exports.GlobalContext = GlobalContext;

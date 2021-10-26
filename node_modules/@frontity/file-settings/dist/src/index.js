"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSites = exports.getSettings = void 0;
var getSettings_1 = require("./getSettings");
Object.defineProperty(exports, "getSettings", { enumerable: true, get: function () { return __importDefault(getSettings_1).default; } });
var getAllSites_1 = require("./getAllSites");
Object.defineProperty(exports, "getAllSites", { enumerable: true, get: function () { return __importDefault(getAllSites_1).default; } });
__exportStar(require("../types"), exports);

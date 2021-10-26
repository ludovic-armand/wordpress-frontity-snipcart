"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dev = exports.build = exports.serve = void 0;
/**
 * The serve function that dynamically imports the Frontity serve command.
 *
 * @param args - Defined in {@link ServeOptions}.
 * @returns The imported module.
 */
const serve = (args) => Promise.resolve().then(() => __importStar(require("./serve"))).then((mod) => mod.default(args));
exports.serve = serve;
/**
 * The build function that dynamically imports the Frontity build command.
 *
 * @param args - Defined in {@link BuildOptions}.
 *
 * @returns The imported module.
 */
const build = (args) => Promise.resolve().then(() => __importStar(require("./build"))).then((mod) => mod.default(args));
exports.build = build;
/**
 * The dev function that dynamically imports the Frontity dev command.
 *
 * @param args - Defined in {@link DevOptions}.
 *
 * @returns The imported module.
 */
const dev = (args) => Promise.resolve().then(() => __importStar(require("./dev"))).then((mod) => mod.default(args));
exports.dev = dev;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./utils/envs");
const path_1 = require("path");
const create_server_1 = __importDefault(require("./utils/create-server"));
const appDir = path_1.resolve(process.cwd(), "build/server.js");
/**
 * Create a node server and run the server.js bundle.
 *
 * @param options - Defined in {@link ServeOptions}.
 */
const serve = async ({ isHttps, port }) => {
    const app = require(appDir).default;
    const server = await create_server_1.default({ app, isHttps });
    server.listen(port);
    console.log(`\n\nSERVER STARTED -- Listening @ ${isHttps ? "https" : "http"}://localhost:${port}\n`);
};
exports.default = serve;

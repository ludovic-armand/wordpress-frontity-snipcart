"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const create_server_1 = __importDefault(require("./create-server"));
const open_browser_1 = require("./open-browser");
/**
 * Create an express app ready to be used with webpack-dev-middleware.
 *
 * @param options - Defined in {@link DevOptions}.
 *
 * @returns - An object with the app and a callback function that starts the
 * server when Webpack has finished.
 */
exports.default = async ({ mode, port, isHttps, target, openBrowser = true, publicPath = "/static", }) => {
    // Create the app.
    const app = express_1.default();
    // Use the http or https modules to create the server.
    const server = await create_server_1.default({ app, isHttps });
    // Start listening once webpack has finished.
    let clientFinished = false;
    let serverFinished = false;
    let isListening = false;
    const url = `${isHttps ? "https" : "http"}://localhost:${port}`;
    // Do not return a response until webpack has finished loading.
    app.use((_, ___, next) => {
        if (!isListening) {
            const interval = setInterval(() => {
                if (isListening) {
                    clearInterval(interval);
                    next();
                }
            }, 1000);
        }
        else {
            next();
        }
    });
    // Start listening.
    server.listen(port, () => {
        console.log(`\n\nSERVER STARTED -- Listening @ ${url}\n  - mode: ${mode}\n  - target: ${target}\n  - public-path: ${publicPath}\n\n`);
    });
    // Open localhost on the local browser.
    if (openBrowser)
        open_browser_1.openBrowserTab(url);
    //
    /**
     * Check if webpack has finished (both the client and server bundles).
     *
     * @param compiler - A {@link MultiCompiler} from Webpack.
     */
    const done = (compiler) => {
        compiler.compilers[0].hooks.done.tapAsync("frontity-dev-server", (_, cb) => {
            clientFinished = true;
            if (clientFinished && serverFinished && !isListening) {
                isListening = true;
            }
            cb();
        });
        compiler.compilers[1].hooks.done.tapAsync("frontity-dev-server", (_, cb) => {
            serverFinished = true;
            if (clientFinished && serverFinished && !isListening) {
                isListening = true;
            }
            cb();
        });
    };
    return { app, done };
};

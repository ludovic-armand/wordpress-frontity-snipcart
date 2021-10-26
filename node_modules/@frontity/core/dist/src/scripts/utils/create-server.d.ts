/// <reference types="express-serve-static-core" />
import express from "express";
import * as http from "http";
import * as https from "https";
declare const _default: ({ app, isHttps, }: {
    app: express.Express;
    isHttps: boolean;
}) => Promise<http.Server | https.Server>;
export default _default;

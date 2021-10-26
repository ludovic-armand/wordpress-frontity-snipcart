import { RequestHandler } from "express";
import { MultiCompiler } from "webpack";
declare function webpackHotServerMiddleware(multiCompiler: MultiCompiler): RequestHandler;
export default webpackHotServerMiddleware;

import { Request, Response } from "express";
export declare type RouteType = (request: Request, response: Response, next: Function) => void;

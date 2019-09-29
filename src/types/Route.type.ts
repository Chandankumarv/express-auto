import { Request, Response } from "express";

export type RouteType = (request: Request, response: Response, next: Function) => void;

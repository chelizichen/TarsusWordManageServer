
import { TarsusGlobalPipe } from "tarsus/core/httpservice";
import {Request} from 'express';

class LogGlobalPipe implements TarsusGlobalPipe{
  next(req:Request, res, next): void {
    console.log("接收到请求 - ",req.url,req.query);
    console.log("接收到请求 - ",req.url,req.body);
    next()
  }
}

export { LogGlobalPipe };
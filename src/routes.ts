import {Request, Response} from 'express';

export function helloTs(request: Request, response: Response) {
  return response.json({message: "Hello Ts"})
}
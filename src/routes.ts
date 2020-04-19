import {Request, Response} from 'express';
import CreateUser from './services/CreateUser';
export function helloTs(request: Request, response: Response) {
  const user = CreateUser(
    {name: "celsin", 
    email: "celsim@gmail.com", 
    password: "1234",
    techs: ["React Native", "Expo", {title: "Reactizinho", experience: 2}]}, 
    )
  return response.json(user)
}
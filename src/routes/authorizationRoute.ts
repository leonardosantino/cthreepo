import { NextFunction, Request, Response, Router } from "express";
import { sign } from "jsonwebtoken";
import User from "../entity/User";
import ForbiddenErros from "../errors/ForbiddenErrors";
import UserService from "../service/UserService";

const authorization = Router()

authorization.post("/authorization", async (request: Request, response: Response, nextFunction: NextFunction) => {
  const service = new UserService()  

  try{
    const {email, password}: User = request.body

    const userDatabase = await service.findByEmail(email, password)
    if(!userDatabase){
      throw new ForbiddenErros("Authorization User or password invalid")
    }

    const token = sign({user: userDatabase?.email}, "secret_key", {subject: userDatabase?.id})

    response.status(200).send(token)
  }
  catch(errors){

    console.log(errors)
  }

})

export default authorization;

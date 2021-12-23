import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import ForbiddenErros from "../errors/ForbiddenErrors";

function bearerAuthentication(request: Request, response: Response, nextFucntion: NextFunction) {
  
  try {

    const authorizationHeaders = request.headers["authorization"]

    if(!authorizationHeaders){
      throw new ForbiddenErros("Bearer Authentication Credential invalid !")
    }

    const [AuthenticatedType, token] = authorizationHeaders.split(' ')

    if(!token){
      throw new ForbiddenErros("Bearer Authentication Token invalid !")
    }

    const payload = verify(token, "secret_key")

    nextFucntion()

  } catch (error) {

    console.log(error)
    response.status(403).end("Forbiden")
  }
}

export default bearerAuthentication;

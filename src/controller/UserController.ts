import { Request, Response } from "express";
import UserService from "../service/UserService";


export default class UserController {

    

    async save(request: Request, response: Response) {

        const service = new UserService()

        const user = request.body;

        return await service.save(user).then((u)=>{response.status(200).send(u)}) 
    }

    async findById(request: Request, response: Response) {

        const service = new UserService()

        const uuid = request.params.uuid;

        const user = await service.findById(uuid)
        
        if(!user){return response.status(404).send("user not Found !") }

        return response.status(200).send(user) 
    }

    async findAll(request: Request, response: Response) {

        const service = new UserService()

        const uuid = request.params.uuid;

        return await service.findAll().then((u)=>{response.status(200).send(u)}) 
    }

}

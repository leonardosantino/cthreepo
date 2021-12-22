import { Request, Response } from "express";
import UserService from "../service/UserService";

export default class UserController {

    async save(request: Request, response: Response) {
        const service = new UserService()

        const user = request.body;

        await service.save(user)

        return response.status(201).send(user)
    }

    async updateById(request: Request, response: Response) {
        const service = new UserService()

        const user = request.body;

        await service.updateById(user)

        return response.status(200).send(user)
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

        const users = await service.findAll()
        return response.status(200).send(users)
    }

    async deleteById(request: Request, response: Response) {
        const service = new UserService()
        const uuid = request.params.uuid;

        await service.deleteById(uuid)
        return response.status(200).send(`User id: ${uuid} deleted!`)
    }
}

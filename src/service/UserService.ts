// import {hash} from "bcryptjs";
import User from "../entity/User";
import { getRepository } from "typeorm";

export default class UserService{

    async save(user:User){

        const repository = getRepository(User)

        return await repository.save(user)
    }

    async findById(id:string){

        const repository = getRepository(User)

        return await repository.findOne(id)
    }

    async findAll(){

        const repository = getRepository(User)

        return await repository.find()
    }


}
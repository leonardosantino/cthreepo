import {hash} from "bcrypt"
import User from "../entity/User";
import { getRepository } from "typeorm";

export default class UserService{

    async save(user:User){

        const repository = getRepository(User)

        hash(user.password, 8, function(err, hash) {
            user.password = hash
        });

        console.log(user.password)

        return await repository.save(user)
    }

    async findById(id:string){

        const repository = getRepository(User)

        // if(!user){ return response.status(404).send("User not found !")}

        return await repository.findOne(id)
    }

    async findAll(){

        const repository = getRepository(User)

        return await repository.find()
    }


}
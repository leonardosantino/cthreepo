import { hash } from "bcrypt"
import User from "../entity/User";
import { getRepository } from "typeorm";

export default class UserService {

    private repository = getRepository(User)

    async save(user: User) {

        user.password = await hash(user.password, 8)
        return await this.repository.save(user)
    }

    async updateById(user: User) {

        if (user.password) {
            user.password = await hash(user.password, 8)
        }
        return await this.repository.save(user)
    }

    async findById(id: string) {

        return await this.repository.findOne(id)
    }

    async findAll() {

        return await this.repository.find()
    }


    async deleteById(id: string) {

        return await this.repository.delete(id)
    }

}
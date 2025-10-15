import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "../dto/create-user.dto";
import {RolesService} from "../roles/roles.service";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService) {
    }

    async createUsers(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
const role = await this.roleService.getRoleByValue("USER")
        if (!role) {
            throw new Error('Роль USER не найдена');
        }
        await user.$set('roles',[role.id])
        return user;

    }
    async getAllUsers(){
        const user = await this.userRepository.findAll({include: {all:true}});
        return user;
    }

}

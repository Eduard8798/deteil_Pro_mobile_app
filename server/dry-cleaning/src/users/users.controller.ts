import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateUserDto} from "../dto/create-user.dto";
import {UsersService} from "./users.service";



@Controller('users')
export class UsersController {

    constructor(private UserService:UsersService) {
    }

    @Post()
    create(@Body() userDto : CreateUserDto){
        return this.UserService.createUsers(userDto)
    }



    @Get()
    get(){
        return this.UserService.getAllUsers()
    }

}

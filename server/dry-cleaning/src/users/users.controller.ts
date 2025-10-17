import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "../dto/create-user.dto";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";



@Controller('users')
export class UsersController {

    constructor(private UserService:UsersService) {
    }

    @Post()
    create(@Body() userDto : CreateUserDto){
        return this.UserService.createUsers(userDto)
    }


    @UseGuards(JwtAuthGuard) //auth method
    @Get()
    get(){
        return this.UserService.getAllUsers()
    }

}

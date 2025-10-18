import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "../dto/create-user.dto";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles-guard";
import {AddRoleDto} from "./dto/add-role.dto";



@Controller('users')
export class UsersController {

    constructor(private usersService:UsersService) {
    }

    @Post()
    create(@Body() userDto : CreateUserDto){
        return this.usersService.createUsers(userDto)
    }


    @UseGuards(JwtAuthGuard) //auth method
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()
    get(){
        return this.usersService.getAllUsers()
    }

    @UseGuards(JwtAuthGuard) //auth method
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto){
        return this.usersService.addRole(dto);
    }

}

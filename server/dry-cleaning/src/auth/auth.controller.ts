import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserDto} from "../dto/create-user.dto";

@Controller('auth')
export class AuthController {

    @Post('/login')
    login(@Body()userDto: CreateUserDto){

    }
}

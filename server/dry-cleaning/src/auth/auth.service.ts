import {Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import {User} from "../users/users.model";

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {
    }

    async login(userDto: CreateUserDto) {
const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }


    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByPhone(userDto.phone);
        if (candidate){
            throw new HttpException('Пользыватель с таким номером сущесвтует',HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password,4);
        const user = await this.userService.createUsers({...userDto,password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user:User){
        const payload = {phone: user.phone, id: user.id, roles: user.roles}
        return  {
            token:this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByPhone(userDto.phone);
        if (!user) {
            throw new UnauthorizedException({ message: 'Пользователь не найден' });
        }

        const passwordEquals = await bcrypt.compare(userDto.password,user.password)
        if (user && passwordEquals){
            return user;
        }
        throw new UnauthorizedException({message:'Некоректый теелфон или пароль'})
    }
}

export class CreateUserDto {
    readonly name: string;
    readonly phone: string;
    readonly password: string;
    readonly role?:string;
}

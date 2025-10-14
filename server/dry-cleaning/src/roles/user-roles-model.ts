import {BelongsToMany, Column, ForeignKey, Model, Table} from 'sequelize-typescript';
import {User} from "../users/users.model";
import {Role} from "./roles.model";

interface RolesCreationAttrs{
    value:string;
    description:string;
}

@Table({ tableName: 'user-roles', createdAt:false,updatedAt:false })
export class UserRoles extends Model<UserRoles> {
    @Column({
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @ForeignKey( ()=> Role)
    @Column({
        allowNull: true,
        unique:true
    })
    declare roleId: number;

    @ForeignKey( ()=> User)
    @Column({
        allowNull: true,
    })
    declare userId: number;



}

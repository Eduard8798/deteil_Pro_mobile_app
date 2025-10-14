import {BelongsToMany, Column, Model, Table} from 'sequelize-typescript';
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles-model";

interface RolesCreationAttrs{
   value:string;
   description:string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role,RolesCreationAttrs> {
    @Column({
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @Column({
        allowNull: true,
        unique:true
    })
    declare value: string;

    @Column({
        allowNull: true,
    })
    declare description: string;


    @BelongsToMany( () => User, () => UserRoles)
    users: User[];
}

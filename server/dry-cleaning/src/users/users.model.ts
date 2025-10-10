import { Column, Model, Table } from 'sequelize-typescript';

interface UserAttCreate{
    name:string;
    phone:string;
    role?:string;
}

@Table({ tableName: 'users' })
export class User extends Model<User,UserAttCreate> {
    @Column({
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @Column({
        allowNull: true,
    })
    declare name: string;

    @Column({
        unique: true,
        allowNull: true,
    })
    declare phone: string;

    @Column({
        allowNull: true,
    })
    declare password: string;

    @Column({
        allowNull: true,
        defaultValue: 'user'
    })
    declare role: string;
}

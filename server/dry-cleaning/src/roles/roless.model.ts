import { Column, Model, Table } from 'sequelize-typescript';

interface RolesCreationAttrs{
   value:string;
   description:string;
}

@Table({ tableName: 'roles' })
export class Roles extends Model<Roles,RolesCreationAttrs> {
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


}

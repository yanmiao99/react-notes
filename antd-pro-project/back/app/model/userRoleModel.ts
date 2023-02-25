/**
 * @desc 角色用户关系表
 */
import { Column, DataType, Model, Table, CreatedAt, UpdatedAt, ForeignKey} from 'sequelize-typescript';
import {UserModel} from './userModel'
import {RoleModel} from './roleModel'

@Table({
    modelName: 'user_role'
})
export class UserRoleModel extends Model<UserRoleModel> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        comment: '主键ID',
    })
    id: number;

    @ForeignKey(()=>UserModel)
    @Column({
        field:'user_id',
        type: DataType.INTEGER,
        allowNull:false,
        unique:true,
    })
    userId: number;

    @ForeignKey(()=>RoleModel)
    @Column({
        field:'role_id',
        type: DataType.INTEGER,
        allowNull:false,
        unique:true,
    })
    roleId: number;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
};
export default () => UserRoleModel;

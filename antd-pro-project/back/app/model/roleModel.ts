/**
 * @desc 角色表
 */
import {Column, DataType, Model, Table, CreatedAt, UpdatedAt, BelongsToMany} from 'sequelize-typescript';
import {ResourceModel} from './resourceModel';
import {RoleResourceModel} from './roleResourceModel';
import {MenuModel} from './menuModel';
import {RoleMenuModel} from './roleMenuModel';

@Table({
    modelName: 'roles'
})
export class RoleModel extends Model<RoleModel> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        comment: '角色ID',
    })
    id: number;

    @Column({
        type:DataType.STRING(255),
        field:'role_name',
        allowNull:false,
        unique:true,
        comment: '角色名称'
    })
    roleName: string;

    @Column({
        type:DataType.STRING(255),
        field:'role_desc',
        allowNull:false,
        unique:true,
        comment: '角色描述',
    })
    roleDesc: string;

    @Column({
        field:'role_state',
        type:DataType.BOOLEAN,
        allowNull:true,
        unique:false,
        comment: '角色可用状态',
    })
    roleState: boolean;

    @BelongsToMany(()=>ResourceModel, ()=>RoleResourceModel)
    sources:ResourceModel[];

    @BelongsToMany(()=>MenuModel, ()=>RoleMenuModel)
    menus:MenuModel[];

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
};
export default () => RoleModel;

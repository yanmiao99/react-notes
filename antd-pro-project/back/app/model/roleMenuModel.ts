/**
 * @desc 角色权限关系表
 */
import { Column, DataType, Model, Table, CreatedAt, UpdatedAt, ForeignKey} from 'sequelize-typescript';
import {MenuModel} from './menuModel'
import {RoleModel} from './roleModel'

@Table({
    modelName: 'rights_role_menu'
})
export class RoleMenuModel extends Model<RoleMenuModel> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        comment: '主键ID',
    })
    id: number;

    @ForeignKey(()=>RoleModel)
    @Column({
        field:'role_id',
        type: DataType.INTEGER,
        allowNull:false,
    })
    roleId: number;

    @ForeignKey(()=>MenuModel)
    @Column({
        field:'menu_id',
        type: DataType.INTEGER,
        allowNull:false,
    })
    menuId: number;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
};
export default () => RoleMenuModel;

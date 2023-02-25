/**
 * @desc 角色权限关系表
 */
import { Column, DataType, Model, Table, CreatedAt, UpdatedAt, ForeignKey} from 'sequelize-typescript';
import {ResourceModel} from './resourceModel'
import {RoleModel} from './roleModel'

@Table({
    modelName: 'rights_role_resource'
})
export class RoleResourceModel extends Model<RoleResourceModel> {

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

    @ForeignKey(()=>ResourceModel)
    @Column({
        field:'source_id',
        type: DataType.INTEGER,
        allowNull:false,
    })
    sourceId: number;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
};
export default () => RoleResourceModel;

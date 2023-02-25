/**
 * @desc 菜单权限表
 */
import {Column, DataType, Model, Table, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table({
    modelName: 'rights_resource'
})
export class ResourceModel extends Model<ResourceModel> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        comment: '资源ID',
    })
    id: number;

    @Column({
        type:DataType.STRING(255),
        field:'source_name',
        allowNull:false,
        comment: '资源名称'
    })
    sourceName: string;

    @Column({
        type:DataType.STRING(255),
        field:'source_desc',
        allowNull:false,
        comment: '资源描述',
    })
    sourceDesc: string;

    @Column({
        field:'source_state',
        type:DataType.BOOLEAN,
        allowNull:true,
        defaultValue: true,
        comment: '资源是否可用',
    })
    sourceState: boolean;

    @Column({
        type:DataType.STRING(255),
        field:'source_method',
        allowNull:true,
        comment: '请求方式',
    })
    sourceMethod: string;

    @Column({
        type:DataType.STRING(255),
        field:'source_path',
        allowNull:true,
        comment: '请求地址',
    })
    sourcePath:string;

    @Column({
        type: DataType.INTEGER,
        field:'parent_id',
        allowNull: true,
        comment: '权限的父级编号',
        defaultValue: 0
    })
    parentId:number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        comment: '权限的等级',
        defaultValue: 0
    })
    level:number;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
};
export default () => ResourceModel;

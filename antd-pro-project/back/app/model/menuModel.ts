/**
 * @desc 菜单权限表
 */
import {Column, DataType, Model, Table, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table({
    modelName: 'rights_menu'
})
export class MenuModel extends Model<MenuModel> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        comment: '菜单ID',
    })
    id: number;

    @Column({
        type:DataType.INTEGER,
        allowNull:false,
        comment: '菜单排序'
    })
    sort: string;

    @Column({
        type:DataType.STRING(255),
        field:'menu_name',
        allowNull:false,
        comment: '菜单名称'
    })
    menuName: string;

    @Column({
        type:DataType.STRING(255),
        field:'menu_desc',
        allowNull:false,
        comment: '菜单描述',
    })
    menuDesc: string;

    @Column({
        field:'menu_state',
        type:DataType.BOOLEAN,
        allowNull:true,
        defaultValue: true,
        comment: '菜单是否可用',
    })
    menuState: boolean;

    @Column({
        type:DataType.STRING(255),
        field:'menu_path',
        allowNull:false,
        comment: '菜单路由地址',
    })
    menuPath: string;

    @Column({
        type:DataType.STRING(255),
        field:'menu_component',
        allowNull:false,
        comment: '路由对应组件',
    })
    menuComponent: string;

    @Column({
        type:DataType.STRING(255),
        field:'menu_icon',
        allowNull:true,
        comment: '菜单图标',
    })
    menuIcon:string;

    @Column({
        type: DataType.INTEGER,
        field:'parent_id',
        allowNull: true,
        comment: '菜单的父级编号',
        defaultValue: 0
    })
    parentId:number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        comment: '菜单的等级',
        defaultValue: 0
    })
    level:number;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
};
export default () => MenuModel;

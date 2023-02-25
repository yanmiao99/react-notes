/**
 * @desc 用户表
 */
import {Column, DataType, Model, Table, CreatedAt, UpdatedAt, HasMany, BelongsToMany} from 'sequelize-typescript';
import {UserAuthModel} from './userAuthModel';
import {RoleModel} from './roleModel'
import {UserRoleModel} from './userRoleModel'


// https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/core-concepts/validations-and-constraints.md
@Table({
    modelName: 'user'
})
export class UserModel extends Model<UserModel> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        comment: '用户ID',
    })
    id: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
        unique: true,
        comment: '用户邮箱',
        validate: {
            isEmail: true
        }
    })
    mail: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
        unique: true,
        comment: '用户手机',
        validate: {
            is: /^1[3456789]\d{9}$/
        }
    })
    mobile: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true,
        comment: '用户密码',
        validate: {
            min: 6
        }
    })
    password: string;

    @Column({
        field:'nike_name',
        type: DataType.STRING(255),
        comment: '用户昵称',
    })
    nikeName: string;

    @Column({
        field:'avatar_url',
        type:DataType.STRING(255),
        comment: '用户头像',
    })
    avatarURL: string;

    @Column({
        // 虚拟字段
        type: DataType.VIRTUAL,
        get(){
            return 'http://127.0.0.1:7001';
        }
    })
    baseURL: string;

    @Column({
        field:'user_state',
        type:DataType.BOOLEAN,
        comment: '用户是否可用',
    })
    userState: boolean;

    @HasMany(() => UserAuthModel)
    oauths: UserAuthModel[];

    @BelongsToMany(()=>RoleModel, ()=>UserRoleModel)
    roles:RoleModel[];

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
};
export default () => UserModel;

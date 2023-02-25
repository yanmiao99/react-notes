/**
 * @desc 授权表
 */
import {Column, DataType, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, Table} from 'sequelize-typescript';
import {UserModel} from './userModel'
@Table({
    modelName:'user_auth'
})
export class UserAuthModel extends Model<UserAuthModel> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        comment: '授权ID',
    })
    id: number;

    @Column({
        field: 'identity_type',
        type:DataType.STRING(255),
        allowNull:false,
        comment: '授权来源',
    })
    identityType: string;

    @Column({
        field:'access_token',
        type:DataType.STRING(255),
        allowNull:false,
        comment: '授权令牌',
    })
    accessToken: string;

    @Column({
        field:'open_id',
        type:DataType.STRING(255),
        allowNull:false,
        comment: '用户三方唯一标识',
    })
    openId: string;

    @Column({
        type:DataType.DATE,
        allowNull:true,
        comment: '令牌过期时间',
    })
    expire_in: Date;

    @ForeignKey(()=>UserModel)
    @Column({
        field:'user_id',
        type: DataType.INTEGER,
    })
    userId: number;

    @BelongsTo(()=>UserModel)
    user:UserModel;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
};
export default () => UserAuthModel;

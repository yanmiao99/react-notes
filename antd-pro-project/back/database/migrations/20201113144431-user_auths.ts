'use strict';
import {QueryInterface} from 'sequelize';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface:QueryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('user_auths', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      identity_type:{  // 保存是哪个平台授权的QQ/Weixin/Weibo/Github
        type:STRING(255),
        allowNull:false,
      },
      access_token: { // 保存授权之后拿到的令牌
        type:STRING(255),
        allowNull:false,
      },
      open_id:{ // 保存用户在第三方平台唯一标识
        type:STRING(255),
        allowNull:false,
      },
      expire_in:{  // token过期时间
        type: DATE,
        allowNull:true
      },
      user_id  : {    // 本地绑定用户的id
        type: INTEGER,
        references:{
          model:'users',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: DATE
      },
      updated_at: {
        type: DATE
      },
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async (queryInterface:QueryInterface) => {
    await queryInterface.dropTable('user_auths');
  },
};

'use strict';

module.exports = {
    // 在执行数据库升级时调用的函数，创建 users 表
    up: async (queryInterface, Sequelize) => {
        const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
        await queryInterface.createTable('roles', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            role_name: {
                type:STRING(255),
                allowNull:false,
                unique:true,
            },
            role_desc:{
                type:STRING(255),
                allowNull:false,
                unique:true
            },
            role_state:{
                type:BOOLEAN,
                allowNull:true,
                unique:false,
                defaultValue: true
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
    down: async (queryInterface) => {
        await queryInterface.dropTable('roles');
    },
};

'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('rights_resources', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      source_name: {
        type:STRING(255),
        allowNull:false,
      },
      source_desc:{
        type:STRING(255),
        allowNull:false,
      },
      source_state:{
        type:BOOLEAN,
        allowNull:true,
        defaultValue: true
      },
      source_method:{
        type:STRING(255),
        allowNull:true,
        defaultValue: ''
      },
      source_path:{
        type:STRING(255),
        allowNull:true,
      },
      parent_id:{
        type: INTEGER,
        allowNull:true,
        defaultValue: 0
      },
      level:{
        type: INTEGER,
        allowNull:true,
        defaultValue: 0
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
    await queryInterface.dropTable('rights_resources');
  },
};

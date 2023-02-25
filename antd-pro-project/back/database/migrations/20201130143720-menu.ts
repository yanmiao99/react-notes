'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('rights_menus', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sort:{
        type: INTEGER,
        allowNull:false,
      },
      menu_name: {
        type:STRING(255),
        allowNull:false,
      },
      menu_desc:{
        type:STRING(255),
        allowNull:false,
      },
      menu_component:{
        type:STRING(255),
        allowNull:false,
      },
      menu_state:{
        type:BOOLEAN,
        allowNull:true,
        defaultValue: true
      },
      menu_path:{
        type:STRING(255),
        allowNull:false,
      },
      menu_icon:{
        type:STRING(255),
        allowNull:true,
      },
      parent_id:{
        type:INTEGER,
        allowNull:false,
        defaultValue: 0
      },
      level:{
        type:INTEGER,
        allowNull:false,
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
    await queryInterface.dropTable('rights_menus');
  },
};

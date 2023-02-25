'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE } = Sequelize;
    await queryInterface.createTable('rights_role_menus', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      role_id  : {    // 绑定角色的id
        type: INTEGER,
        allowNull: false,
        unique: false,
        references:{
          model:'roles',
          key:'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      menu_id  : {    // 绑定菜单的id
        type: INTEGER,
        allowNull: false,
        unique: false,
        references:{
          model:'rights_menus',
          key:'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    await queryInterface.dropTable('rights_role_menus');
  },
};

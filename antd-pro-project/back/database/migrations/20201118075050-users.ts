'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { BOOLEAN, STRING } = Sequelize;
    // 用户昵称
    await queryInterface.addColumn('users', 'nike_name', {
      type:STRING(255),
      allowNull:true,
      unique:false,
    });
    // 用户头像
    await queryInterface.addColumn('users', 'avatar_url',{
      type: STRING(255),
      allowNull:true,
      unique:false,
      defaultValue: '/public/avatar.jpg'
    });
    // 是否可用
    await queryInterface.addColumn('users', 'user_state',{
      type: BOOLEAN,
      allowNull:true,
      unique:false,
      defaultValue: true
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'nike_name');
    await queryInterface.removeColumn('users', 'avatar_url');
    await queryInterface.removeColumn('users', 'user_state');
  }
};

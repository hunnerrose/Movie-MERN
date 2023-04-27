'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('comments', 'movie_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'movies',
        key: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('comments', 'movie_id');
  }
};

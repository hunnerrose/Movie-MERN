'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        name: 'Jerry',
        comment: 'This movie sucks balls'
      },
      {
        name: 'Tina',
        comment: 'I love this movie!'
      },
      {
        name: 'Chris',
        comment: 'It was okay'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {})
  }
};

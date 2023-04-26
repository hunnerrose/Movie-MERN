// 'use strict';
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('comments', {
//       comment_id: {
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//         type: Sequelize.INTEGER,
//       },
//       content: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       author: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       likes: {
//         type: Sequelize.INTEGER,
//         defaultValue: 0,
//       },
//       dislikes: {
//         type: Sequelize.INTEGER,
//         defaultValue: 0,
//       },
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('comments');
//   },
// };

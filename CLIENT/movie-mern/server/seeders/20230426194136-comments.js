"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("comments", [
      {
        name: "Joe",
        text: "WOW! great movie!!",
      },
      {
        name: "John",
        text: "WOW! cool movie!!",
      },
      {
        name: "Josh",
        text: "WOW! awesome movie!!",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulDelete("comments", null, {});
  },
};

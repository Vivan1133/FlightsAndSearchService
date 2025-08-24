'use strict';

const city = require('../models/city');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    await queryInterface.bulkInsert("Airports", [
      {
        name: "Juhu",
        address: "vivekananda road",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "INS airdome",
        address: "south mumbai",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "kempegowda international",
        address: "administration block",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "jakkur",
        address: "indra block",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

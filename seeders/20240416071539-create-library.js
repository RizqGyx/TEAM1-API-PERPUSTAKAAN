"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Libraries", [
      {
        libraryName: "Central Library",
        city: "New York",
        address: "123 Main Street",
        staffId: 1,
        createdAt: "2023-06-02T09:00:00Z",
        updatedAt: "2023-06-02T09:00:00Z",
      },
      {
        libraryName: "Downtown Library",
        city: "Los Angeles",
        address: "456 Oak Avenue",
        staffId: 2,
        createdAt: "2023-06-03T09:00:00Z",
        updatedAt: "2023-06-03T09:00:00Z",
      },
      {
        libraryName: "Uptown Library",
        city: "Chicago",
        address: "789 Pine Boulevard",
        staffId: 3,
        createdAt: "2023-06-04T09:00:00Z",
        updatedAt: "2023-06-04T09:00:00Z",
      },
      {
        libraryName: "Eastside Library",
        city: "Houston",
        address: "1010 Elm Street",
        staffId: 4,
        createdAt: "2023-06-05T09:00:00Z",
        updatedAt: "2023-06-05T09:00:00Z",
      },
      {
        libraryName: "Westside Library",
        city: "San Francisco",
        address: "111 Pine Street",
        staffId: 5,
        createdAt: "2023-06-06T09:00:00Z",
        updatedAt: "2023-06-06T09:00:00Z",
      },
      {
        libraryName: "Northside Library",
        city: "Seattle",
        address: "222 Maple Avenue",
        staffId: 6,
        createdAt: "2023-06-07T09:00:00Z",
        updatedAt: "2023-06-07T09:00:00Z",
      },
      {
        libraryName: "Southside Library",
        city: "Miami",
        address: "333 Cedar Boulevard",
        staffId: 7,
        createdAt: "2023-06-08T09:00:00Z",
        updatedAt: "2023-06-08T09:00:00Z",
      },
      {
        libraryName: "Midtown Library",
        city: "Atlanta",
        address: "444 Walnut Street",
        staffId: 8,
        createdAt: "2023-06-09T09:00:00Z",
        updatedAt: "2023-06-09T09:00:00Z",
      },
      {
        libraryName: "Suburban Library",
        city: "Dallas",
        address: "555 Oak Lane",
        staffId: 9,
        createdAt: "2023-06-10T09:00:00Z",
        updatedAt: "2023-06-10T09:00:00Z",
      },
      {
        libraryName: "Rural Library",
        city: "Denver",
        address: "666 Maple Street",
        staffId: 10,
        createdAt: "2023-06-11T09:00:00Z",
        updatedAt: "2023-06-11T09:00:00Z",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Libraries", null, {});
  },
};

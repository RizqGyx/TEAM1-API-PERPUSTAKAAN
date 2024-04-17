"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Libraries", [
      {
        libraryName: "Central Library",
        city: "New York",
        address: "123 Main Street",
        userId: 1,
        createdAt: "2023-06-02T09:00:00Z",
        updatedAt: "2023-06-02T09:00:00Z",
      },
      {
        libraryName: "Downtown Library",
        city: "Los Angeles",
        address: "456 Oak Avenue",
        userId: 2,
        createdAt: "2023-06-03T09:00:00Z",
        updatedAt: "2023-06-03T09:00:00Z",
      },
      {
        libraryName: "Uptown Library",
        city: "Chicago",
        address: "789 Pine Boulevard",
        userId: 3,
        createdAt: "2023-06-04T09:00:00Z",
        updatedAt: "2023-06-04T09:00:00Z",
      },
      {
        libraryName: "Eastside Library",
        city: "Houston",
        address: "1010 Elm Street",
        userId: 4,
        createdAt: "2023-06-05T09:00:00Z",
        updatedAt: "2023-06-05T09:00:00Z",
      },
      {
        libraryName: "Westside Library",
        city: "San Francisco",
        address: "111 Pine Street",
        userId: 5,
        createdAt: "2023-06-06T09:00:00Z",
        updatedAt: "2023-06-06T09:00:00Z",
      },
      {
        libraryName: "Northside Library",
        city: "Seattle",
        address: "222 Maple Avenue",
        userId: 6,
        createdAt: "2023-06-07T09:00:00Z",
        updatedAt: "2023-06-07T09:00:00Z",
      },
      {
        libraryName: "Southside Library",
        city: "Miami",
        address: "333 Cedar Boulevard",
        userId: 7,
        createdAt: "2023-06-08T09:00:00Z",
        updatedAt: "2023-06-08T09:00:00Z",
      },
      {
        libraryName: "Midtown Library",
        city: "Atlanta",
        address: "444 Walnut Street",
        userId: 8,
        createdAt: "2023-06-09T09:00:00Z",
        updatedAt: "2023-06-09T09:00:00Z",
      },
      {
        libraryName: "Suburban Library",
        city: "Dallas",
        address: "555 Oak Lane",
        userId: 9,
        createdAt: "2023-06-10T09:00:00Z",
        updatedAt: "2023-06-10T09:00:00Z",
      },
      {
        libraryName: "Rural Library",
        city: "Denver",
        address: "666 Maple Street",
        userId: 10,
        createdAt: "2023-06-11T09:00:00Z",
        updatedAt: "2023-06-11T09:00:00Z",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Libraries", null, {});
  },
};

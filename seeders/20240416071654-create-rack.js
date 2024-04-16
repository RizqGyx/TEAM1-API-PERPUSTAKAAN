"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Racks", [
      {
        rackNumber: 1,
        floorNumber: 1,
        libraryId: 1,
        createdAt: "2023-06-02T09:00:00Z",
        updatedAt: "2023-06-02T09:00:00Z",
      },
      {
        rackNumber: 2,
        floorNumber: 1,
        libraryId: 2,
        createdAt: "2023-06-03T09:00:00Z",
        updatedAt: "2023-06-03T09:00:00Z",
      },
      {
        rackNumber: 3,
        floorNumber: 2,
        libraryId: 3,
        createdAt: "2023-06-04T09:00:00Z",
        updatedAt: "2023-06-04T09:00:00Z",
      },
      {
        rackNumber: 4,
        floorNumber: 2,
        libraryId: 4,
        createdAt: "2023-06-05T09:00:00Z",
        updatedAt: "2023-06-05T09:00:00Z",
      },
      {
        rackNumber: 5,
        floorNumber: 3,
        libraryId: 5,
        createdAt: "2023-06-06T09:00:00Z",
        updatedAt: "2023-06-06T09:00:00Z",
      },
      {
        rackNumber: 6,
        floorNumber: 3,
        libraryId: 6,
        createdAt: "2023-06-07T09:00:00Z",
        updatedAt: "2023-06-07T09:00:00Z",
      },
      {
        rackNumber: 7,
        floorNumber: 4,
        libraryId: 7,
        createdAt: "2023-06-08T09:00:00Z",
        updatedAt: "2023-06-08T09:00:00Z",
      },
      {
        rackNumber: 8,
        floorNumber: 4,
        libraryId: 8,
        createdAt: "2023-06-09T09:00:00Z",
        updatedAt: "2023-06-09T09:00:00Z",
      },
      {
        rackNumber: 9,
        floorNumber: 5,
        libraryId: 9,
        createdAt: "2023-06-10T09:00:00Z",
        updatedAt: "2023-06-10T09:00:00Z",
      },
      {
        rackNumber: 10,
        floorNumber: 5,
        libraryId: 10,
        createdAt: "2023-06-11T09:00:00Z",
        updatedAt: "2023-06-11T09:00:00Z",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Racks", null, {});
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Members", [
      {
        name: "John Doe",
        city: "New York",
        address: "123 Main Street",
        phone: "1234567890",
        email: "john@example.com",
        createdAt: "2023-06-02T09:00:00Z",
        updatedAt: "2023-06-02T09:00:00Z",
      },
      {
        name: "Alice Smith",
        city: "Los Angeles",
        address: "456 Oak Avenue",
        phone: "9876543210",
        email: "alice@example.com",
        createdAt: "2023-06-03T09:00:00Z",
        updatedAt: "2023-06-03T09:00:00Z",
      },
      {
        name: "Bob Johnson",
        city: "Chicago",
        address: "789 Pine Boulevard",
        phone: "2345678901",
        email: "bob@example.com",
        createdAt: "2023-06-04T09:00:00Z",
        updatedAt: "2023-06-04T09:00:00Z",
      },
      {
        name: "Emily Davis",
        city: "Houston",
        address: "1010 Elm Street",
        phone: "8765432109",
        email: "emily@example.com",
        createdAt: "2023-06-05T09:00:00Z",
        updatedAt: "2023-06-05T09:00:00Z",
      },
      {
        name: "Michael Wilson",
        city: "San Francisco",
        address: "111 Pine Street",
        phone: "3456789012",
        email: "michael@example.com",
        createdAt: "2023-06-06T09:00:00Z",
        updatedAt: "2023-06-06T09:00:00Z",
      },
      {
        name: "Emma Brown",
        city: "Seattle",
        address: "222 Maple Avenue",
        phone: "7654321098",
        email: "emma@example.com",
        createdAt: "2023-06-07T09:00:00Z",
        updatedAt: "2023-06-07T09:00:00Z",
      },
      {
        name: "David Martinez",
        city: "Miami",
        address: "333 Cedar Boulevard",
        phone: "4567890123",
        email: "david@example.com",
        createdAt: "2023-06-08T09:00:00Z",
        updatedAt: "2023-06-08T09:00:00Z",
      },
      {
        name: "Sophia Garcia",
        city: "Atlanta",
        address: "444 Walnut Street",
        phone: "6543210987",
        email: "sophia@example.com",
        createdAt: "2023-06-09T09:00:00Z",
        updatedAt: "2023-06-09T09:00:00Z",
      },
      {
        name: "Matthew Hernandez",
        city: "Dallas",
        address: "555 Oak Lane",
        phone: "5678901234",
        email: "matthew@example.com",
        createdAt: "2023-06-10T09:00:00Z",
        updatedAt: "2023-06-10T09:00:00Z",
      },
      {
        name: "Olivia Lopez",
        city: "Denver",
        address: "666 Maple Street",
        phone: "7890123456",
        email: "olivia@example.com",
        createdAt: "2023-06-11T09:00:00Z",
        updatedAt: "2023-06-11T09:00:00Z",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Members", null, {});
  },
};

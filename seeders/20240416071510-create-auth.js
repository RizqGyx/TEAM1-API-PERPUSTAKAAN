"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Auths", [
      {
        memberId: 1,
        password: "john",
        confirmPassword: "john",
        email: "john@example.com",
        createdAt: "2023-06-28T09:25:00Z",
        updatedAt: "2023-06-28T09:25:00Z",
      },
      {
        memberId: 2,
        password: "alice",
        confirmPassword: "alice",
        email: "alice@example.com",
        createdAt: "2023-06-29T07:30:00Z",
        updatedAt: "2023-06-29T07:30:00Z",
      },
      {
        memberId: 3,
        password: "bob",
        confirmPassword: "bob",
        email: "bob@example.com",
        createdAt: "2023-06-30T10:45:00Z",
        updatedAt: "2023-06-30T10:45:00Z",
      },
      {
        memberId: 4,
        password: "emily",
        confirmPassword: "emily",
        email: "emily@example.com",
        createdAt: "2023-07-01T08:15:00Z",
        updatedAt: "2023-07-01T08:15:00Z",
      },
      {
        memberId: 5,
        password: "michael",
        confirmPassword: "michael",
        email: "michael@example.com",
        createdAt: "2023-07-02T11:00:00Z",
        updatedAt: "2023-07-02T11:00:00Z",
      },
      {
        memberId: 6,
        password: "emma",
        confirmPassword: "emma",
        email: "emma@example.com",
        createdAt: "2023-07-03T09:30:00Z",
        updatedAt: "2023-07-03T09:30:00Z",
      },
      {
        memberId: 7,
        password: "david",
        confirmPassword: "david",
        email: "david@example.com",
        createdAt: "2023-07-04T10:45:00Z",
        updatedAt: "2023-07-04T10:45:00Z",
      },
      {
        memberId: 8,
        password: "sophia",
        confirmPassword: "sophia",
        email: "sophia@example.com",
        createdAt: "2023-07-05T11:15:00Z",
        updatedAt: "2023-07-05T11:15:00Z",
      },
      {
        memberId: 9,
        password: "matthew",
        confirmPassword: "matthew",
        email: "matthew@example.com",
        createdAt: "2023-07-06T08:30:00Z",
        updatedAt: "2023-07-06T08:30:00Z",
      },
      {
        memberId: 10,
        password: "olivia",
        confirmPassword: "olivia",
        email: "olivia@example.com",
        createdAt: "2023-07-07T09:00:00Z",
        updatedAt: "2023-07-07T09:00:00Z",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Auths", null, {});
  },
};

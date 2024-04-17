"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Auths", [
      {
        userId: 1,
        password: "JohnDoe",
        confirmPassword: "JohnDoe",
        email: "JohnDoe@example.com",
        createdAt: "2023-06-28T09:25:00Z",
        updatedAt: "2023-06-28T09:25:00Z",
      },
      {
        userId: 2,
        password: "JaneSmith",
        confirmPassword: "JaneSmith",
        email: "JaneSmith@example.com",
        createdAt: "2023-06-29T07:30:00Z",
        updatedAt: "2023-06-29T07:30:00Z",
      },
      {
        userId: 3,
        password: "MichaelJohnson",
        confirmPassword: "MichaelJohnson",
        email: "MichaelJohnson@example.com",
        createdAt: "2023-06-30T10:45:00Z",
        updatedAt: "2023-06-30T10:45:00Z",
      },
      {
        userId: 4,
        password: "EmilyBrown",
        confirmPassword: "EmilyBrown",
        email: "EmilyBrown@example.com",
        createdAt: "2023-07-01T08:15:00Z",
        updatedAt: "2023-07-01T08:15:00Z",
      },
      {
        userId: 5,
        password: "DavidWilson",
        confirmPassword: "DavidWilson",
        email: "DavidWilson@example.com",
        createdAt: "2023-07-02T11:00:00Z",
        updatedAt: "2023-07-02T11:00:00Z",
      },
      {
        userId: 6,
        password: "OliviaTaylor",
        confirmPassword: "OliviaTaylor",
        email: "OliviaTaylor@example.com",
        createdAt: "2023-07-03T09:30:00Z",
        updatedAt: "2023-07-03T09:30:00Z",
      },
      {
        userId: 7,
        password: "JamesBrown",
        confirmPassword: "JamesBrown",
        email: "JamesBrown@example.com",
        createdAt: "2023-07-04T10:45:00Z",
        updatedAt: "2023-07-04T10:45:00Z",
      },
      {
        userId: 8,
        password: "EmmaMartinez",
        confirmPassword: "EmmaMartinez",
        email: "EmmaMartinez@example.com",
        createdAt: "2023-07-05T11:15:00Z",
        updatedAt: "2023-07-05T11:15:00Z",
      },
      {
        userId: 9,
        password: "NoahAnderson",
        confirmPassword: "NoahAnderson",
        email: "NoahAnderson@example.com",
        createdAt: "2023-07-06T08:30:00Z",
        updatedAt: "2023-07-06T08:30:00Z",
      },
      {
        userId: 10,
        password: "SophiaWilson",
        confirmPassword: "SophiaWilson",
        email: "SophiaWilson@example.com",
        createdAt: "2023-07-07T09:00:00Z",
        updatedAt: "2023-07-07T09:00:00Z",
      },
      {
        userId: 11,
        password: "mhdrizki",
        confirmPassword: "mhdrizki",
        email: "mhdrizki@example.com",
        createdAt: "2023-07-07T09:00:00Z",
        updatedAt: "2023-07-07T09:00:00Z",
      },
      {
        userId: 12,
        password: "rizkiyogamauludin",
        confirmPassword: "rizkiyogamauludin",
        email: "rizkiyogamauludin@example.com",
        createdAt: "2023-07-07T09:00:00Z",
        updatedAt: "2023-07-07T09:00:00Z",
      },
      {
        userId: 13,
        password: "rayhanhafa",
        confirmPassword: "rayhanhafa",
        email: "rayhanhafa@example.com",
        createdAt: "2023-07-07T09:00:00Z",
        updatedAt: "2023-07-07T09:00:00Z",
      },
      {
        userId: 14,
        password: "maulanategar",
        confirmPassword: "maulanategar",
        email: "maulanategar@example.com",
        createdAt: "2023-07-07T09:00:00Z",
        updatedAt: "2023-07-07T09:00:00Z",
      },
      {
        userId: 15,
        password: "rafi",
        confirmPassword: "rafi",
        email: "rafi@example.com",
        createdAt: "2023-07-07T09:00:00Z",
        updatedAt: "2023-07-07T09:00:00Z",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Auths", null, {});
  },
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: "Rizki",
        role: "Admin",
        address: "Jalan Sentosa no 12",
        phoneNum: "0822-2222-2222",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Yoga",
        role: "Staff",
        address: "Jalan Abadi no 13",
        phoneNum: "0833-3333-3333",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tegar",
        role: "Staff",
        address: "Jalan Jalan no 14",
        phoneNum: "0844-4444-4444",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rafi",
        role: "Staff",
        address: "Jalan Colours no 15",
        phoneNum: "0855-5555-5555",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rayhan",
        role: "Staff",
        address: "Jalan Anontokyo no 16",
        phoneNum: "0866-6666-6666",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tran Rush",
        role: "Guest",
        address: "625 Summit Street, Westboro, New Mexico, 9171",
        phoneNum: "+1 (980) 461-3161",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pickett Hardin",
        role: "Guest",
        address: "553 Tech Place, Ebro, American Samoa, 3552",
        phoneNum: "+1 (802) 540-3811",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Aisha Hunt",
        role: "Guest",
        address: "327 Ryder Street, Genoa, Georgia, 7753",
        phoneNum: "+1 (937) 448-3335",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bettye Mathis",
        role: "Guest",
        address: "525 Herkimer Street, Forbestown, Delaware, 6457",
        phoneNum: "+1 (851) 541-3210",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cora Cameron",
        role: "Guest",
        address: "561 Erasmus Street, Sperryville, Illinois, 8390",
        phoneNum: "+1 (973) 596-2755",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lynette Witt",
        role: "Guest",
        address: "166 Woodpoint Road, Disautel, Florida, 7570",
        phoneNum: "+1 (955) 438-2112",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    await queryInterface.bulkInsert('Auths', [
      {
        userId: 1,
        password: "admin",
        confirmPassword: "admin",
        email: "admin@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        password: "staff",
        confirmPassword: "staff",
        email: "staff1@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        password: "staff",
        confirmPassword: "staff",
        email: "staff2@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        password: "staff",
        confirmPassword: "staff",
        email: "staff3@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        password: "staff",
        confirmPassword: "staff",
        email: "staff4@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        password: "guest",
        confirmPassword: "guest",
        email: "Love@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        password: "guest",
        confirmPassword: "guest",
        email: "Hall@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        password: "guest",
        confirmPassword: "guest",
        email: "Juliette@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        password: "guest",
        confirmPassword: "guest",
        email: "Wooten@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        password: "guest",
        confirmPassword: "guest",
        email: "Coleen@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 11,
        password: "guest",
        confirmPassword: "guest",
        email: "Eaton@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }      
      
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Auths', null, {});
  }
};

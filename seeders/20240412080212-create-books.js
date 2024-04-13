'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Books', [
        {
          title: "laborum anim reprehenderit",
          genre: "sains",
          author: "Mooney Weaver",
          publisher: "mizan",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 7, //number of copy for each books
          availableAt: [1,3,2], //library id
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "culpa quis elit",
          genre: "action",
          author: "Shawn Butler",
          publisher: "bentang pustaka",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 3,
          availableAt: [1,2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "deserunt amet ut",
          genre: "education",
          author: "Valencia Leon",
          publisher: "gramedia",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 2,
          availableAt: [3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "culpa excepteur in",
          genre: "comedy",
          author: "Marks Adams",
          publisher: "greenbook",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 3,
          availableAt: [4],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "elit nisi laboris",
          genre: "comedy",
          author: "Fox Boyle",
          publisher: "erlangga",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 1,
          availableAt: [2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "sit commodo aute",
          genre: "history",
          author: "April Dennis",
          publisher: "greenbook",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 7,
          availableAt: [2,3,4],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "ipsum ad aute",
          genre: "education",
          author: "Sharp Stanton",
          publisher: "gagasmedia",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 3,
          availableAt: [4],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "mollit elit dolor",
          genre: "education",
          author: "Minerva Booker",
          publisher: "erlangga",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 4,
          availableAt: [1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "veniam amet duis",
          genre: "comedy",
          author: "Barbra Wagner",
          publisher: "bentang pustaka",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 7,
          availableAt: [1,2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "amet sint magna",
          genre: "drama",
          author: "Lilian Oliver",
          publisher: "gagasmedia",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 4,
          availableAt: [2,3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "enim laborum non",
          genre: "sains",
          author: "Holder Terry",
          publisher: "gramedia",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 2,
          availableAt: [3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "officia duis non",
          genre: "education",
          author: "Stafford Myers",
          publisher: "erlangga",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 1,
          availableAt: [2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "laboris sit quis",
          genre: "education",
          author: "Bridgette Cooper",
          publisher: "mizan",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 6,
          availableAt: [4],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "reprehenderit occaecat est",
          genre: "history",
          author: "Alicia Contreras",
          publisher: "bentang pustaka",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 5,
          availableAt: [1,2,3,4],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "non laboris deserunt",
          genre: "sains",
          author: "Clark Bean",
          publisher: "mizan",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 7,
          availableAt: [2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "reprehenderit velit exercitation",
          genre: "comedy",
          author: "Alisa Norton",
          publisher: "bentang pustaka",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 6,
          availableAt: [2,4],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "velit mollit deserunt",
          genre: "sains",
          author: "Tamra Kane",
          publisher: "greenbook",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "nulla quis officia",
          genre: "education",
          author: "Cummings Lewis",
          publisher: "gramedia",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 6,
          availableAt: [1,4],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "ad laboris in",
          genre: "education",
          author: "Rowe Perry",
          publisher: "mizan",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 1,
          availableAt: [2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "cupidatat est in",
          genre: "action",
          author: "Erin Forbes",
          publisher: "mizan",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 3,
          availableAt: [3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "aliqua deserunt deserunt",
          genre: "action",
          author: "Richards Kirkland",
          publisher: "erlangga",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 3,
          availableAt: [3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "excepteur adipisicing officia",
          genre: "comedy",
          author: "Lewis Ellis",
          publisher: "gagasmedia",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 4,
          availableAt: [1,2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "ex voluptate aute",
          genre: "history",
          author: "Greer Lawson",
          publisher: "erlangga",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 4,
          availableAt: [4],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "anim sit ullamco",
          genre: "education",
          author: "Karin Fleming",
          publisher: "erlangga",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 6,
          availableAt: [2,4],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "mollit mollit sunt",
          genre: "sains",
          author: "Chavez Burgess",
          publisher: "mizan",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 1,
          availableAt: [1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "cupidatat non reprehenderit",
          genre: "sains",
          author: "Kelli Becker",
          publisher: "erlangga",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 1,
          availableAt: [4],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "ex irure id",
          genre: "comedy",
          author: "Morgan Alvarado",
          publisher: "bentang pustaka",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 6,
          availableAt: [3,4],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "ullamco ex amet",
          genre: "sains",
          author: "Jimenez Richardson",
          publisher: "mizan",
          imageCover: "http://via.placeholder.com/600x400",
          copies: 3,
          availableAt: [4],
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ]);
    await queryInterface.bulkInsert('Libraries', [
      {
        libraryName: "Gramedia Pustaka",
        address: "Jalan Pemuda No. 3, Kota Harapan",
        staffId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        libraryName: "Rumah Buku Cita-Cita Bangsa",
        address: "Jalan Kartini No. 15, Kota Gemilang",
        staffId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        libraryName: "Balai Buku Seribu Cerita",
        address: "Jalan Sudirman No. 8, Kota Bahagia",
        staffId: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        libraryName: "Gramedia Pustaka",
        address: "Jalan Pemuda No. 3, Kota Harapan",
        staffId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ]);
    await queryInterface.bulkInsert('Transactions' , [
      {
        bookId: 1,
        borrowerId: 5, //Guest
        dateBorrowed: "2024-04-11 06:03:44.596+08",
        returnDate: "2024-04-11 06:03:44.596+08",
        status: "Pending",
        issuerId: 2, //Staff
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookId: 5,
        borrowerId: 7, //Guest
        dateBorrowed: "2024-04-11 06:03:44.596+08", 
        returnDate: "2024-04-11 06:03:44.596+08",
        status: "Pending",
        issuerId: 3, //Staff
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookId: 7,
        borrowerId: 6, //Guest
        dateBorrowed: "2024-04-11 06:03:44.596+08",
        returnDate: "2024-04-11 06:03:44.596+08",
        status: "Pending",
        issuerId: 4, //Staff
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookId: 3,
        borrowerId: 8, //Guest
        dateBorrowed: "2024-04-11 06:03:44.596+08",
        returnDate: "2024-04-11 06:03:44.596+08",
        status: "Pending",
        issuerId: 2, //Staff
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookId: 8,
        borrowerId: 9, //Guest
        dateBorrowed: "2024-04-11 06:03:44.596+08",
        returnDate: "2024-04-11 06:03:44.596+08",
        status: "Pending",
        issuerId: 2, //Staff
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookId: 9,
        borrowerId: 11, //Guest
        dateBorrowed: "2024-04-11 06:03:44.596+08",
        returnDate: "2024-04-11 06:03:44.596+08",
        status: "Pending",
        issuerId: 4, //Staff
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookId: 2,
        borrowerId: 10, //Guest
        dateBorrowed: "2024-04-11 06:03:44.596+08",
        returnDate: "2024-04-11 06:03:44.596+08",
        status: "Pending",
        issuerId: 3, //Staff
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null);
    await queryInterface.bulkDelete('Libraries', null);
    await queryInterface.bulkDelete('Transactions', null);
  }
};

'use strict';

import { QueryInterface } from "sequelize/types";


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: "123e4567-e89b-12d3-a456-426614174000",
          user_name: "namusste",
          bio: "Avid surfer",
          img: "",
          following_count: 1,
          followers_count: 1,
          first_name: "Connor",
          last_name: "Musson",
          email: "connor@gmail.com",
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "18c1237f-363e-44db-9999-5adc3afd279c",
          user_name: "adrianito",
          bio: "Living the mustache life",
          img: "",
          following_count: 1,
          followers_count: 1,
          first_name: "Adriano",
          last_name: "Gonzalez",
          email: "adri@gmail.com",
          password: "4567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "b28f24a1-77ec-4809-a26e-ee35068d12a8",
          user_name: "albanito",
          bio: "Looking for a jam",
          img: "",
          following_count: 0,
          followers_count: 0,
          first_name: "Alban",
          last_name: "Mansord",
          email: "albanmsd@gmail.com",
          password: "7890",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'followings',
      [
        {
          id: "a3e36756-5017-49a7-b1d0-12fbd868555b",
          UserId: "123e4567-e89b-12d3-a456-423314174000",
          FriendId: "18c1237f-363e-44db-9999-5adc3afd279c",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "082834dd-c873-466b-b69a-98ed41d9f27e",
          UserId: "18c1237f-363e-44db-9999-5adc3afd279c",
          FriendId: "123e4567-e89b-12d3-a456-423314174000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "0e25c5b3-1902-4a68-8c3d-14cf4b23c3ff",
          UserId: "b28f24a1-77ec-4809-a26e-ee35068d12a8",
          FriendId: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'sessions',
      [
        {
          id: "123e4567-e89b-12d3-a456-426614174000",
          valid: true,
          user_agent: "",
          UserId: "123e4567-e89b-12d3-a456-426614174000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "18c1237f-363e-44db-9999-5adc3afd279c",
          valid: true,
          user_agent: "",
          UserId:"18c1237f-363e-44db-9999-5adc3afd279c",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "b28f24a1-77ec-4809-a26e-ee35068d12a8",
          valid: true,
          user_agent: "",
          UserId: "b28f24a1-77ec-4809-a26e-ee35068d12a8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    // await queryInterface.bulkInsert(
    //   'cities',
    //   [
    //     {
    //       id: "848b8780-cc46-4e06-a12c-1f0d22fc4723",
    //       UserId: "",
    //       name: "",
    //       country: "",
    //       location: "",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       id: "42b08843-69ae-4f30-a37a-a99982945db2",
    //       UserId: "",
    //       name: "",
    //       country: "",
    //       location: "",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       id: "2260e096-421d-4944-a077-ccf02081db3c",
    //       UserId: "",
    //       name: "",
    //       country: "",
    //       location: "",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null,bulkDeleteOptions);
    await queryInterface.bulkDelete('followings', null,bulkDeleteOptions);
    await queryInterface.bulkDelete('sessions', null,bulkDeleteOptions);
  },
};

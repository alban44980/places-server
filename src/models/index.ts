'use strict';
import * as dotenv from 'dotenv';
import { Sequelize, Dialect } from 'sequelize';
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME ?? 'myplaces',
  process.env.DB_USER ?? 'admin2',
  process.env.DB_PASSWORD ?? 'admin2',
  {
    host: process.env.DB_HOST ?? 'localhost',
    dialect: (process.env.DB_DIALECT as Dialect) ?? 'postgres',
    logging: false,
  }
);

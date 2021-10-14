"use strict";
import * as dotenv from "dotenv";
import { Sequelize, Dialect } from "sequelize";
import { populateTags } from "../seeders/seedTags";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME ?? "",
  process.env.DB_USER ?? "",
  process.env.DB_PASSWORD ?? "",
  {
    host: process.env.DB_HOST ?? "localhost",
    dialect: (process.env.DB_DIALECT as Dialect) ?? "postgres",
    logging: false,
    // port: process.env.DB_PORT ?? 3005,
  }
);

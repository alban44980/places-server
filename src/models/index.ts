"use strict";
import * as dotenv from "dotenv";
import { Sequelize, Dialect } from "sequelize";
import config from "config";

// dotenv.config();

export const sequelize = new Sequelize(
  // process.env.DB_NAME ?? "",
  // process.env.DB_USER ?? "",
  // process.env.DB_PASSWORD ?? "",
  // {
  //   host: process.env.DB_HOST ?? "localhost",
  //   dialect: (process.env.DB_DIALECT as Dialect) ?? "postgres",
  //   logging: false,
  //   // port: process.env.DB_PORT ?? 3005,
  // }

  config.get<string>("DB_NAME") ?? "",
  config.get<string>("DB_USER") ?? "",
  config.get<string>("DB_PASSWORD") ?? "",
  {
    host: config.get<string>("DB_HOST") ?? "localhost",
    dialect: (config.get<string>("DB_DIALECT") as Dialect) ?? "",
    logging: false,
  }
);

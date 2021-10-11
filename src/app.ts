import express from "express";
import config from "config";
import logger from "./utils/logger";
import routes from "./routes";
import { sequelize } from "./models/index";

const port = config.get<number>("port");
const app = express();

(async () => {
  await sequelize.sync();
  app.listen(port, () => {
    logger.info(`server is running at http://localhost:${port}`);
    routes(app);
  });
})();

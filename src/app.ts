import express from "express";
import config from "config";
import logger from "./utils/logger";
import routes from "./routes";
import { sequelize } from "./models/index";
//need to add cors

const port = config.get<number>("port");
const app = express();

app.use(express.json());

(async () => {
  await sequelize.sync({ force: true });
  // await sequelize.sync();
  app.listen(port, () => {
    logger.info(`server is running at http://localhost:${port}`);
    routes(app);
  });
})();

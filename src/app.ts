import express from "express";
import logger from "./utils/logger";
import routes from "./routes";
import { sequelize } from "./models/index";
import { populateTags } from "./seeders/seedTags";
import cors from "cors";

const port = process.env.PORT;
const path = process.env.PATHIP;
const app = express();
app.use(cors());
app.use(express.json());

console.log(path);

(async () => {
  //await sequelize.sync({ force: true });
  await sequelize.sync();
  try {
    await populateTags();
  } catch (error) {}

  app.listen({ port, path }, () => {
    logger.info(`server is running at http://${path}:${port}`);
    routes(app);
  });
})();

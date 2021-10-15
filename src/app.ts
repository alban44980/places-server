import express from "express";
import logger from "./utils/logger";
import routes from "./routes";
import { sequelize } from "./models/index";
import { populateTags } from "./seeders/seedTags";
import cors from "cors";

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  // await sequelize.sync({ force: true });
  await sequelize.sync();
  try {
    await populateTags();
  } catch (error) {}

  app.listen(port, () => {
    logger.info(`server is running at http://localhost:${port}`);
    routes(app);
  });
})();

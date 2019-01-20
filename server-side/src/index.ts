import * as express from "express";
import * as bodyParser from "body-parser";
import { AppRouter } from "./router/index";
import { Fleet } from "./models/object-models.ts/fleet";

// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const fleet = new Fleet();
AppRouter.initializeRoutes(app);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

import * as express from "express";
import * as bodyParser from "body-parser";
import { AppRouter } from "./router/index";
import { Fleet } from "./app-service/fleet";
import fs = require('fs');
import { ICarDetails } from "./models/interface-models/car-details";

class App {
    public initialize() {
        // Set up the express app
        const app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));

        let carDetails: ICarDetails[];
        fs.readFile('./json/car-list.json', 'utf8', (err, data) => {
            if (err) throw err;
            try {
                carDetails = JSON.parse(data);
            } catch (error) {
                carDetails = [];
            }
            const fleet: Fleet = new Fleet(carDetails);

            AppRouter.fleet = fleet;
            AppRouter.initializeRoutes(app);

            const PORT = 5000;
            app.listen(PORT, () => {
                console.log(`server running on port ${PORT}`)
            });
        });
    }
}

const myApp = new App();
myApp.initialize();

import * as express from "express";
import { AppRoutes } from './app-routes';
import { Fleet } from './../app-service/fleet';
import { Customer } from './../models/object-models.ts/customer';
import { Car } from "../models/object-models.ts/car";
import { CarType } from "../models/enums/car-type";

export class AppRouter {
    public static baseRoute: string = "/api/v1/";

    public static fleet: Fleet;

    public static initializeRoutes(app: express.Express): void {
        app.get(`${this.baseRoute}${AppRoutes.find}/:type`, (req, res) => {
            let type: CarType;
            try {
                type = parseInt(req.params.type, 10) || null;
            } catch (e) {
                type = null;
            }
            const customer: Customer = new Customer("Angel", 2, 3);
            const car: Car | null = this.fleet.hire(customer, type);
            if (car) {
                res.status(200).send({
                    success: true,
                    message: "Car available.",
                    data: {
                        car: {
                            name: car.name,
                            driver: car.driver.name,
                            phone: car.driver.phone
                        }
                    }
                })
            } else {
                res.status(200).send({
                    success: false,
                    message: "No Car available.",
                });
            }
        });

        app.post(`${this.baseRoute}${AppRoutes.startTrip}`, (_req, res) => {
            res.status(200).send({
                success: true,
                message: "API is ready for use.",
            })
        });

        app.post(`${this.baseRoute}${AppRoutes.endtrip}`, (_req, res) => {
            res.status(200).send({
                success: true,
                message: "API is ready for use.",
            })
        });

        return;
    }
}
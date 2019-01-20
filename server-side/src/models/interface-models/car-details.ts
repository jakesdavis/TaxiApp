import { CarType } from "../enums/car-type";
import { CarDriver } from './../object-models.ts/car-driver';

export interface ICarDetails {
    name: string;
    type: CarType;
    driver: CarDriver;
}
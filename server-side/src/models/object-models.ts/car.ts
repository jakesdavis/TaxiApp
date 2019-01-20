import { CarType } from "../enums/car-type";
import { CustomPosition } from "./custom-position";
import { CarDriver } from "./car-driver";
import { Customer } from "./customer";
import { FareCalculator } from "../utils/fare-calculator";

export class Car {
    public name: string;
    public type: CarType;
    public driver: CarDriver;

    private m_positionAtHire: CustomPosition;
    private m_currentPosition: CustomPosition;
    private m_isAvailable: boolean;
    private m_customer: Customer;

    constructor(name: string, type: CarType, driver: CarDriver) {
        if (name == null) {
            throw new Error("name is empty");
        }
        if (type == null) {
            throw new Error("type is empty");
        }
        if (driver == null) {
            throw new Error("driver is empty");
        }

        this.name = name;
        this.type = type;
        this.driver = driver;
        this.m_currentPosition = new CustomPosition();
        this.m_isAvailable = true;
    }


    public isAvailable(): boolean {
        return this.m_isAvailable;
    }

    public hire(customer: Customer): boolean {
        if (customer == null) {
            throw new Error("customer is empty");
        }
        if (this.m_isAvailable == false) {
            throw new Error("car is not empty");
        }
        if (this.m_customer != null) {
            throw new Error("car is not empty");
        }
        if (this.m_positionAtHire != null) {
            throw new Error("car is not empty");
        }

        this.m_customer = customer;
        this.m_isAvailable = false;
        return true;
    }

    public endTrip(): number {
        if (this.m_customer == null) {
            throw new Error("No customer in car.");
        }
        if (this.m_isAvailable === true) {
            throw new Error("No customer in car.");
        }
        if (this.m_positionAtHire == null) {
            throw new Error("Illegal Passenger");
        }

        this.m_customer = null;
        this.m_isAvailable = true;

        return FareCalculator.calculate(this.m_positionAtHire, this.m_currentPosition);
    }
}
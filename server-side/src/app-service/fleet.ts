import { Car } from "../models/object-models.ts/car";
import { Customer } from "../models/object-models.ts/customer";
import { ICarDetails } from "../models/interface-models/car-details";
import { DistanceCalculator } from "../models/utils/distance-calculator";
import { CustomPosition } from './../models/object-models.ts/custom-position';
import { CarType } from "../models/enums/car-type";

export class Fleet {

    private carList: Car[] = [];

    constructor(carList: ICarDetails[] = []) {
        this.carList = carList.map(x => new Car(x.name, x.type, x.driver));
    }

    public hire(customer: Customer, type: CarType = null): Car | null {
        const freeCar: Car = this.getNextAvailableCar(customer.position, type);
        if (freeCar) {
            freeCar.hire(customer);
        }
        return freeCar;
    }

    public endTrip(carName: string): Car | null {
        const freeCar: Car = this.getCar(carName);
        if (freeCar) {
            freeCar.endTrip();
        }
        return freeCar;
    }

    public hasFreeCars(currentPosition: CustomPosition): boolean {
        return this.getNextAvailableCar(currentPosition) != null;
    }

    private getNextAvailableCar(currentPosition: CustomPosition, type: CarType = null): Car {
        console.log(currentPosition)
        const sortedList: Car[] =
            this.carList
                .filter(x => x.isAvailable() && (type === CarType.Pink ? x.type === CarType.Pink : true))
                .sort((a, b) => {
                    return DistanceCalculator.calculate(currentPosition, a.getPosition()) > DistanceCalculator.calculate(currentPosition, b.getPosition()) ? -1 : 1;
                });
        if (sortedList.length > 0) {
            return sortedList[0];
        } else {
            return null;
        }
    }

    private getCar(carName: string): Car {
        return this.carList.find(x => x.name === carName);
    }
}
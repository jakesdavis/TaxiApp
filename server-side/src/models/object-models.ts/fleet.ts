import { Car } from "./car";
import { CarType } from "../enums/car-type";
import { CarDriver } from "./car-driver";
import { Customer } from "./customer";

export class Fleet {

  constructor() {
    this.generate(10);
  }

  public hire(customer: Customer): boolean {
    const freeCar: Car = this.carList.find(x => x.isAvailable())
    freeCar.hire(customer);
    return 
  }

  private carList: Car[] = [];

  private generate(count: number): void {
    for (let i = 0; i < count; i++) {
      this.carList.push(new Car(`Car - ${i}`, (i % 5 === 0 ? CarType.Base : CarType.Pink), new CarDriver(`Driver - ${i}`)));
    }
  }

}
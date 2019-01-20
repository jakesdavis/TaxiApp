import { CustomPosition } from "./custom-position";

export class Customer {
    public name: string;
    public position: CustomPosition;

    constructor(name: string, lat: number, long: number) {
        this.name = name;
        this.position = new CustomPosition(lat, long);
    }
}
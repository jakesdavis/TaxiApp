export class CarDriver {
    public name: string;

    constructor(name: string) {
        if (name == null) {
            throw new Error("name is empty");
        }

        this.name = name;
    }
}
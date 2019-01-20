export class CarDriver {
    public name: string;
    public phone: string;

    constructor(name: string, phone: string) {
        if (name == null) {
            throw new Error("name is empty");
        }

        this.name = name;
        this.phone = phone;
    }
}
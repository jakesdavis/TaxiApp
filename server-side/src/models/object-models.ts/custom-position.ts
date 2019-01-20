export class CustomPosition {
    public latitude: number;
    public longitude: number;

    constructor() {
        this.latitude = Math.floor(Math.random() * 100);
        this.longitude = Math.floor(Math.random() * 100);
    }
}
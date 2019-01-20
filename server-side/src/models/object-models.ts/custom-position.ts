export class CustomPosition {
    public latitude: number;
    public longitude: number;

    constructor(latitude: number = null, longitude: number = null) {
        this.latitude = latitude || Math.floor(Math.random() * 100);
        this.longitude = longitude || Math.floor(Math.random() * 100);
    }
}
import { CustomPosition } from "../object-models.ts/custom-position";

export class DistanceCalculator {
    public static calculate(startPosition: CustomPosition, endPosition: CustomPosition): number {
        if (startPosition == null) {
            throw new Error("invalid start position");
        }
        if (endPosition == null) {
            throw new Error("invalid end position");
        }

        return parseFloat(this.pythagorean((startPosition.latitude - endPosition.latitude, 2), (startPosition.longitude - endPosition.longitude, 2)).toFixed(3)) / 1000;
    }

    private static pythagorean(a: number, b: number): number {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    }
}
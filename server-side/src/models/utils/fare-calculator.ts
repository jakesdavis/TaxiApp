import { CustomPosition } from "../object-models.ts/custom-position";

export class FareCalculator {
    private static m_currenySymbol = "₹";

    public static calculate(startPosition: CustomPosition, endPosition: CustomPosition): number {
        if (startPosition == null) {
            throw new Error("startPosition is empty.");
        }
        if (endPosition == null) {
            throw new Error("endPosition is empty.");
        }

        return parseFloat(this.pythagorean((startPosition.latitude - endPosition.latitude, 2), (startPosition.longitude - endPosition.longitude, 2)).toFixed(3));
    }

    private static pythagorean(a: number, b: number): number {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    }
} 
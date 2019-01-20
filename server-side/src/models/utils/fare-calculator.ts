import { CustomPosition } from "../object-models.ts/custom-position";
import { DistanceCalculator } from "./distance-calculator";

export class FareCalculator {

    private static m_ratePerKm: number = 2;
    private static m_ratePerMin: number = 1;

    public static calculate(startPosition: CustomPosition, endPosition: CustomPosition, timeInMinutes: number = 0): number {
        if (startPosition == null) {
            throw new Error("startPosition is empty.");
        }
        if (endPosition == null) {
            throw new Error("endPosition is empty.");
        }

        return DistanceCalculator.calculate(startPosition, endPosition) * this.m_ratePerKm + timeInMinutes * this.m_ratePerMin;
    }
} 
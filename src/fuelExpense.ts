import { AutoExpense } from './autoExpense';

export class FuelExpense extends AutoExpense {
  constructor(
    vehicleName: string,
    date: string,
    odometerReading: number,
    cost: number,
    location: string,
    public gallons: number,
    public ratePerGallon: number
  ) {
    super(vehicleName, date, odometerReading, cost, location);
  }

  totalCost(): number {
    return this.gallons * this.ratePerGallon;
  }
}

export class AutoExpenseFactory {
  static createFuelExpense(vehicleName: string, date: string, odometerReading: number, cost: number, location: string, gallons: number, ratePerGallon: number): FuelExpense {
    return new FuelExpense(vehicleName, date, odometerReading, cost, location, gallons, ratePerGallon);
  }
}

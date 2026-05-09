export class AutoExpense {
  constructor(
    public vehicleName: string,
    public date: string,
    public odometerReading: number,
    public cost: number,
    public location: string,
  ) {}
}

export function MpgForThisExpense(accumulator: any, expense: AutoExpense): any {
    // Implementation here, for example:
    if (!accumulator[expense.vehicleName]) {
	accumulator[expense.vehicleName] = { gallons: 0, lastOdometer: null };
    }
    
    const vehicleInfo = accumulator[expense.vehicleName];
    vehicleInfo.gallons += expense.gallons;
    

  if (
    expense.odometerReading !== null &&
    expense.odometerReading > vehicleInfo.lastOdometer
  ) {
      const miles_driven =       expense.odometerReading - vehicleInfo.lastOdometer;
      const gallons_consumed = vehicleInfo.gallons;
      const mpg = miles_driven / gallons_consumed;
      return mpg;
  }

  return null;
}

export class AutoExpenseFactory {
  static create(
    vehicleName: string,
    date: string,
    odometerReading: number,
    cost: number,
    location: string,
  ): AutoExpense {
    return new AutoExpense(vehicleName, date, odometerReading, cost, location);
  }
}

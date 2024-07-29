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
  
  if (expense.odometerReading !== null && expense.odometerReading > vehicleInfo.lastOdometer) {
    const mileage = (expense.odometerReading - vehicleInfo.lastOdometer) / vehicleInfo.gallons;
    vehicleInfo.lastOdometer = expense.odometerReading;
    return mileage;
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

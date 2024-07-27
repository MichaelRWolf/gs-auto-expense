export class AutoExpense {
  constructor(
    public vehicleName: string,
    public date: string,
    public odometerReading: number,
    public cost: number,
    public location: string
  ) {}
}

export class AutoExpenseFactory {
  static create(vehicleName: string, date: string, odometerReading: number, cost: number, location: string): AutoExpense {
    return new AutoExpense(vehicleName, date, odometerReading, cost, location);
  }
}

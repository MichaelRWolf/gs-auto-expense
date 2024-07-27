import { FuelExpense, AutoExpenseFactory } from "./fuelExpense";

describe("FuelExpense", () => {
  it("should create derived object from AutoExpenseFactory", () => {
    const fuelExpense = AutoExpenseFactory.createFuelExpense(
      "Car",
      "2024-07-27",
      15000,
      50.0,
      "Location A",
      10,
      5.0,
    );
    expect(fuelExpense).toBeInstanceOf(FuelExpense);
  });

  it("should return total cost from gallons and rate", () => {
    const fuelExpense = new FuelExpense(
      "Car",
      "2024-07-27",
      15000,
      50.0,
      "Location A",
      10,
      5.0,
    );
    expect(fuelExpense.totalCost()).toBe(50.0);
  });
});

import { AutoExpense, AutoExpenseFactory } from './autoExpense';

describe('AutoExpense', () => {
  it('should create object from AutoExpenseFactory', () => {
    const expense = AutoExpenseFactory.create('Car', '2024-07-27', 15000, 50.0, 'Location A');
    expect(expense).toBeInstanceOf(AutoExpense);
  });

  it('should access all attributes', () => {
    const expense = AutoExpenseFactory.create('Car', '2024-07-27', 15000, 50.0, 'Location A');
    expect(expense.vehicleName).toBe('Car');
    expect(expense.date).toBe('2024-07-27');
    expect(expense.odometerReading).toBe(15000);
    expect(expense.cost).toBe(50.0);
    expect(expense.location).toBe('Location A');
  });
});

import { AutoExpense, AutoExpenseFactory } from "./autoExpense";
import {MpgForThisExpense} from './autoExpense';

// @ts-ignore
import { verify, verifyAsJSON } from 'approvals';

// @ts-ignore
import { defaultConfig } from 'approvals/lib/config';

describe("AutoExpense", () => {
  it("should create object from AutoExpenseFactory", () => {
    const expense = AutoExpenseFactory.create(
      "Car",
      "2024-07-27",
      15000,
      50.0,
      "Location A",
    );
    expect(expense).toBeInstanceOf(AutoExpense);
  });

  it("should access all attributes", () => {
    const expense = AutoExpenseFactory.create(
      "Car",
      "2024-07-27",
      15000,
      50.0,
      "Location A",
    );
    expect(expense.vehicleName).toBe("Car");
    expect(expense.date).toBe("2024-07-27");
    expect(expense.odometerReading).toBe(15000);
    expect(expense.cost).toBe(50.0);
    expect(expense.location).toBe("Location A");
  });
});

describe('MpgForThisExpense', () => {
    it('returns null and updates accumulator for first entry', () => {
    const accumulator: any = {};
    const expense = AutoExpenseFactory.create('Buick', '2024-07-22', 50043, 10, 'First location');

    const mpg = MpgForThisExpense(accumulator, expense);

      // const dataMap = new Map<string, any>([
      // 	  ['MPG', result],
      // 	  ['accumulator', accumulator]
      // ]);

      // const actual = {
      // 	  MPG: result,
      // 	  accumulator: accumulator
      // };


      // // Convert Map to Plain Object
      // const plainObject = Object.fromEntries(dataMap);

      // // Convert Plain Object to JSON String
      // const jsonString = JSON.stringify(plainObject, null, 2);


      // Create a Map with your data
      // const dataMap = new Map<string, any>([
      // 	  ['MPG', null],
      // 	  ['accumulator', {
      // 	      Toyota: {
      // 		  gallons: 0,
      // 		  lastOdometer: 50000
      // 	      }
      // 	  }]
      // ]);

      const received = {
	  MPG: mpg,
	  accumulator: accumulator
	  // accumulator: {
	  //     Toyota: {
	  // 	  gallons: 0,
	  // 	  lastOdometer: 50000
	  //     }
	  // }
      };
      
      // Convert the Map to a Plain Object
      // const plainObject = Object.fromEntries(dataMap);
      
      // // Convert the Plain Object to a JSON String
      // // const jsonString = JSON.stringify(plainObject, null, 2); // Pretty print with 2 spaces
      // const jsonString = JSON.stringify(plainObject);
      
      // Call verifyAsJSON with the appropriate arguments
      // verify(__dirname, 'autoExpenseTest', JSON.stringify(data, null, 2), {});
      verify("test_resources", 'returns-null-and-updates-accumulator-for-first-entry', JSON.stringify(received, null, 2), {});
      


     // verifyAsJSON('.', 'testxxx', jsonString, defaultConfig)
      // verifyAsJSON('.', 'testxxx', dataMap, defaultConfig)
      // verifyAsJSON('.', 'testxxx', accumulator, defaultConfig)
      // verifyAsJSON('.', 'testxxx', result, defaultConfig)

      // verify(".", 'testxxx', {	result,	accumulator    }); 
      // verifyAsJSON('.', 'testxxx', result, null)

    // expect(result.mileage).toBeNull();
    // expect(result.accumulator['Toyota'].lastOdometer).toBe(50000);
    // expect(result.accumulator['Toyota'].totalGallons).toBe(10);
  });

  // it('should calculate mileage correctly when there are previous entries', () => {
  //   const accumulator: any = {
  //     'Toyota': { lastOdometer: 49000, totalGallons: 5 },
  //   };
  //   const expense = AutoExpenseFactory.create('Toyota', '2024-07-22', 50000, 10, 'Location A');

  //   const result = MpgForThisExpense(accumulator, expense);

  //   expect(result.mileage).toBeCloseTo(10 / (50000 - 49000), 2); // miles per gallon
  //   expect(result.accumulator['Toyota'].lastOdometer).toBe(50000);
  //   expect(result.accumulator['Toyota'].totalGallons).toBe(15);
  // });

  // it('should handle cases where no odometer reading exists yet', () => {
  //   const accumulator: any = {};
  //   const expense = AutoExpenseFactory.create('Honda', '2024-07-22', 60000, 5, 'Location B');

  //   const result = MpgForThisExpense(accumulator, expense);

  //   expect(result.mileage).toBeNull();
  //   expect(result.accumulator['Honda'].lastOdometer).toBe(60000);
  //   expect(result.accumulator['Honda'].totalGallons).toBe(5);
  // });
});

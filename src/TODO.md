# AutoExpense
- Constructor with ALL positional parameters
- Constructor with minimal required parameters: vehicleName, product, cost, description, (odometer or date)

# GasolineAutoExpense (FKA FuelExpense)
- Constructor with ALL combined parameters
- Constructor with minimal required parameters: gallons

# AutoExpenseFactory
- If description == Gasoline && gallons not null -> GasolineExpense (nee FuelExpense)


# GasolineAutoExpenseCalculations

Sort ``` by_vehicle, by_date, by_odometer, by_date_or_odometer, by_product, by_cost ```

if defined 1st && defined 2nd
   return sign(1st.toNum, 2nd.toNum)
else
	return 0


Requires odometer & gallons
- MpgForThisGasolineExpense() -> MilesPerGallonForThisGasolineExpense()
- DollarsPerMileForThisGasolineExpense()
- MilesPerDollarForThisGasolineExpense()

Requires odometer & date
- MilesPerDayForThisGasolineExpense() - 

AccumulatorForVehicle(vehicleName,         [miles], [gallon]);
AccumulatorForVehicle(vehicleName, [cost], [miles);
AccumulatorForVehicle(vehicleName,         [miles],         [cost)];
AccumulatorForVehicle(vehicleName,         [miles],                [duration)];


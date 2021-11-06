const carMakers = ['ford', 'toyota', 'chevrolet'];
// If explicit
const carMakersExplicit: string[] = ['ford', 'toyota', 'chevy'];

// You can also explicity annotate the type when declaring the variable
let dates: Date[];
dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']]; // string[][]

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Preven incompatible values
// carMakers.push(100);

// Help with iterator methods 'map'
carMakers.map((car: string): string => {
	return car.toUpperCase();
});

// Flexible types- arrays can still contain multiple different values
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2030');
// importantDates.push(100)

// When to use
// Any time we need to represent a collection of records with some arbitrary sort order

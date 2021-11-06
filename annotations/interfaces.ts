const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
};

const printVehicle = (vehicle: {
	name: string;
	year: number;
	broken: boolean;
}) => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle(oldCivic);

// This parameter type annotation in the printVehicle function is too long. How does interface solve this?
// Interface - Creates a new type, describing the property names and value types of an object
interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
	summary(): string;
}

const oldCorolla = {
	name: 'corolla',
	year: 1992,
	broken: false,
	summary(): string {
		return `Name: ${this.name}`;
	},
};

const printVehicleTwo = (vehicle: Vehicle) => {
	console.log(vehicle.summary());
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken: ${vehicle.broken}`);
};

printVehicleTwo(oldCorolla);

// Refactored to interface only having one property
interface Reportable {
	summary(): string;
}

const oldAltima = {
	name: 'altima',
	year: new Date(),
	broken: false,
	summary(): string {
		return `Name: ${this.name}`;
	},
};

const newDrink = {
	color: 'brown',
	carbonated: false,
	sugar: 40,
	summary(): string {
		return `This drink has ${this.sugar} grams of sugar`;
	},
};

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(oldAltima);
printSummary(newDrink);

// We can use a single interface to describe the shape of very different objects
// Both objects above must have the summary function in order to be utilized in the printSummary function
// This is due to the interface or type of the value having to be Reportable

/* 
Interface Declaration
interface interface_name {  
          variables' declaration  
           methods' declaration  
} 
*/

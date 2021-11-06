class Vehicle {
	constructor(public color: string) {}

	public honk(): void {
		console.log('beep');
	}
}

// Car is a type of Vehicle (Child)
class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}

	private drive(): void {
		console.log('vroom');
	}

	startDriving(): void {
		this.drive();
	}
}

const vehicle = new Vehicle('orange');
// vehicle.honk();
console.log(vehicle.color);

const car = new Car(4, 'red');
car.startDriving();
car.honk();

// modifiers
// public (default) - This method can be called any where at any time
// private - This method can only be called by other methods in this class
// protected - This method can be called by other methods in this class, or by other methods in child classes

// We do not mark methods as being private over any other type because over a security concern such as being hacked or having a malicious user.
// It is to restrict the different methods other developers can call and its done out of possibly not trusting other developers to make a call without breaking a specific piece of code such as a complicated method that very deeply manipulates a class

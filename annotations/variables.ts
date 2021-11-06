// PRIMITIVES
let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// BUILT IN OBJECTS
let now: Date = new Date();

// ARRAY
// To annotate an array type you use use a specific type followed by a square bracket : type[]
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// CLASSES
class Car {}
let car: Car = new Car();

// OBJECT LITERAL
let point: { x: number; y: number } = {
	x: 10,
	y: 20,
};

// OR

let pointTwo: {
	x: number;
	y: string;
};

pointTwo = {
	x: 20,
	y: '20',
};

// FUNCTION
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// Type Annotation vs Type Inference
// Type Inference should be used always when possible

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variable on one line
// and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}

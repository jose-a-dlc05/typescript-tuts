const add = (a: number, b: number) => {
	return a + b;
};

const subtract = (a: number, b: number): number => {
	return a - b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

// Void and Never
const logger = (message: string): void => {
	console.log(message);
};

// When you never expect a function to return nothing at all
const throwError = (message: string): never => {
	throw new Error(message);
};

// Destructuring with annotations
const todaysWeather = {
	date: new Date(),
	weather: 'sunny',
};

// const variable = (destructuring : annotation ): type => {}
const logWeather = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date);
	console.log(weather);
};

logWeather(todaysWeather);

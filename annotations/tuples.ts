const drink = {
	color: ' brown',
	carbonated: true,
	sigar: 40,
};

/**
A tuple works like an array with some additional considerations:

The number of elements in the tuple is fixed.
The types of elements are known, and need not be the same.
 */

// Type Alias with Tuple
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['green', false, 0];

// When to use this
// Not frequently used
const carSpecs: [number, number] = [400, 3354];
// Its not clear what this means above

const carStats = {
	horsepower: 400,
	weight: 3354,
};

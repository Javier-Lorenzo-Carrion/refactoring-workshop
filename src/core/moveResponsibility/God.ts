import * as console from 'node:console';

export class Arithmetic {
	add(a: number, b: number): number {
		return a + b;
	}

	subtract(a: number, b: number): number {
		return a - b;
	}
}

export class God {

	sayHello() {
		console.log('Hello!');
	}

	sayBye() {
		console.log('Good bye!');
	}
}

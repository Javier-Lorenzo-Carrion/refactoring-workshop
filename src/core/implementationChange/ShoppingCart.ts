export class Price {
	values: number[] = [];

	private constructor(values: number[]) {
		this.values = values;
	}

	public static createPrices(values: number[]) {
		return new Price(values);
	}
}


export class ShoppingCart {
	private price: number[] = [];

	add(price: number) {
		this.price.push(price);
	}

	calculateTotalPrice(): number {
		return this.price.reduce((previousValue, currentValue) => previousValue + currentValue);
	}

	hasDiscount(): boolean {
		return this.calculateTotalPrice() >= 100;
	}

	numberOfProducts(): number {
		return this.price.length;
	}
}
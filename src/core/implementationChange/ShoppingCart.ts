export class Price {
	private value: number;

	private constructor(value: number) {
		this.value = value;
	}

	public static createPrices(value: number) {
		if (value < 0) {
			throw new Error('Values must be greater than 0');
		}
		return new Price(value);
	}

	public add (price: Price) {
		return new Price(this.value + price.value);
	}

	public isEquals(price: Price): boolean {
		return this.value === price.value;
	}

	public isGreaterThanOrEqual(price: Price): boolean {
		return this.value >= price.value;
	}

}

export class ShoppingCart {
	private priceList: Price[] = [];

	add(price: Price) {
		this.priceList.push(price);
	}
	calculateTotalPrice(): Price {
		return this.priceList.reduce(
			(previousValue, currentValue) => previousValue.add(currentValue),
			Price.createPrices(0)
		);
	}
	hasDiscount(): boolean {
		return this.calculateTotalPrice().isGreaterThanOrEqual(Price.createPrices(100));
	}

	numberOfProducts(): number {
		return this.priceList.length;
	}
}
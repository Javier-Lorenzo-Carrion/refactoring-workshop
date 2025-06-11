export class NewVehicleQuery {
	brand: string;
	description: string;

  get brandDescription(): string {
    return this.brand;
  }

  set brandDescription(value: string) {
    this.brand = value;
  }

	constructor(brand?: string, description?: string) {
		this.brand = brand;
		this.description = description;
	}
}
export class Invoice {
	grossAmount: number;
	taxPercentage: number;
	numberOfItems: number;

	calculateNetAmount(amount: string, tax: string): string {
    const invoice = new Invoice();
		invoice.grossAmount = Number(amount);
		invoice.taxPercentage = Number(tax);
		const taxAmount = (invoice.taxPercentage / 100) * invoice.grossAmount;
		return (invoice.grossAmount - taxAmount).toString();
	}
}

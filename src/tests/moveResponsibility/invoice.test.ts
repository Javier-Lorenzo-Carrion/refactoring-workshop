
import { Invoice } from '../../core/moveResponsibility/Invoice';

describe('The Invoice Service', () => {
	it('calculates net amount', () => {
		const result = new Invoice().calculateNetAmount('100', '10');
		expect(result).toBe('90');
	});
});

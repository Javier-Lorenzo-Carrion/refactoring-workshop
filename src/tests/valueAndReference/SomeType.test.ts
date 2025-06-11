import { SomeType } from '../../core/valueAndReference/SomeType';

describe('You should understand values and references because', () => {
	it('is fundamental', () => {
		const instance = new SomeType();
		const arg1 = 'bar';
		instance.firstMethod(arg1);
		expect(arg1).toBe('bar');

		// EXPLICACIÓN: INSTANCE TIENE TODOS SU CAMPOS VACÍOS MENOS EL ARRAY DE NUMEROS
		// AL LLAMAR AL METODO Y PASARLE 'BAR' SUPUESTAMENTE EL METODO CAMBIA EL VALOR DE 'BAR' POR 'FOO'
		// CUANDO EL PARAMETRO SE PASA COMO VALOR SE REALIZA UNA COPIA Y ES A ESA COPIA A LA QUE SE LE CAMBIAN LO VALORES,
		// MIENTRAS QUE SI SE PASA UNA REFERENCIA A UN OBJETO, SE HACE UNA COPIA DE LA REFERENCIA

		const other = new SomeType();
		other.numbers[0] = 100;
		other.secondMethod(other);
		expect(other.numbers[0]).toBe(100);
		expect(other.someField).toBe(undefined);

		// AL IGUAL QUE ANTES, EN EL METODO SE CREA UNA NUEVA INSTANCIA PERO SOLO ES DENTRO DEL METODO
		// EL 'OTHER' REALMENTE SIGUE SIENDO UN OBJETO CUYO PRIMER ELEMENTO DEL ARRAY DE NUMEROS ES CERO
		// EL CAMPO "OTHERFIELD" ES INDEFINIDO PUES ASÍ SE CREA ESTE OBJETO

		const another: SomeType = new SomeType();
		another.numbers[0] = 200;
		instance.thirdMethod(another);
		expect(another.numbers[0]).toBe(100);
		expect(another.someField).toBe('changed');
		expect(another.child).toStrictEqual(new SomeType());

		//

		const yetAnother: SomeType = new SomeType();
		yetAnother.numbers[0] = 200;
		instance.fourthMethod(yetAnother.numbers);
		expect(yetAnother.numbers[0]).toBe(0);
	});
});

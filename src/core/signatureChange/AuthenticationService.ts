export class Id {
	value: number;

	private constructor(id: number) {
		this.value = id;
	}

	public static createId(id: number): Id {
		return new Id(id);
	}

	public isEqual(): boolean {
		return this.value === 123456;
	}

	public getValue(): number {
		return this.value;
	}
}

export class AuthenticationService {
	isAuthenticated(id: Id): boolean {
		return id.getValue() == 12345;
	}
}
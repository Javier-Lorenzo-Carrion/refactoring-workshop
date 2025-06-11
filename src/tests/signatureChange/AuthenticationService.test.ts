import { AuthenticationService, Id } from '../../core/signatureChange/AuthenticationService';

describe('The authentication service', ()=>{
	it('distinguishes the administrator role',()=>{
		const service = new AuthenticationService()
		const adminId: Id = Id.createId(12345);
		expect(service.isAuthenticated(adminId)).toBeTruthy();
	})
	it('distinguishes the non-administrator role',()=>{
		const service = new AuthenticationService()
		const normalUserId = Id.createId(11111);
		expect(service.isAuthenticated(normalUserId)).toBeFalsy();
	})
})

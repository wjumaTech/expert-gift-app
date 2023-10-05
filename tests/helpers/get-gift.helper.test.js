import { getGifts } from '../../src/helpers/get-gift.helper';

describe('Pruebas en GetGiftHelper', () => {

	test('Debe de retornar un Arr de objetos los cuales a la vez sus valores deben de ser String', async () => {

		const images = await getGifts('goku');
		expect(images.length).toBeGreaterThan( 0 );
		expect( images[0] ).toEqual({
			id: expect.any( String ),
			title: expect.any( String ),
			image: expect.any( String )
		});

	})
});
import { render, screen } from '@testing-library/react';
import { Card } from '../../src/components';


let id = 'asaddrwdfsdsd';
let title = 'saitama';
let image = 'https://one-punch/saitama.jpg';


describe('Probando el CARD COMPONENT', () => {

	test('Debe de hacer match con el SNAPSHOT', () => {

		const { container } = render(<Card id={id} title={title} image={image} />);
		expect(container).toMatchSnapshot();

	});


	test('Debe de mostrar la imagen con el src y el alt valido', () => {

		// Si necesitaramos ver el container lo hariamos de la siguiente manera
		render(<Card id={id} title={title} image={image} />);
		// screen.debug();

		// expect( screen.getByRole('img').src ).toBe( image );

		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(image);
		expect(alt).toBe(title);

	});

	test('Debe de mostrar el titulo en el componente', () => {

		render(<Card id={id} title={title} image={image} />);
		// screen.debug();
		expect( screen.getByText(title) ).toBeTruthy();

	});

});
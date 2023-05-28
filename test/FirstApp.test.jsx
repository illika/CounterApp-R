import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    test('Debe hacer match con el snapshot', () => {

        const title = 'Hola, Soy Nilo';
        const { container } = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();

    });

    test('Debe mostrar el titulo en h1', () => {

        const title = 'Hola, Soy Nilo';
        const { container, getByText } = render(<FirstApp title={title} />);

        expect(getByText(title)).toBeTruthy();

        // NO RECOMENDADO
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

    });
});
import { getAllByText, render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, Soy Illika';
    const subTitle = 'Soy un Subtitulo';

    test('Debe hacer match con snapshot', () => {

        const { container } = render(< FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el mensaje Hola, Soy Illika', () => {
        render(< FirstApp title={title} />);
        // ve la pantalla interna del body
        //screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debe de mostrar el titulo en h1', () => {
        render(< FirstApp title={title} />);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });

    test('Debe de mostrar el subtitulo', () => { 
        render(< FirstApp title={title} subTitle={subTitle} />);
        expect(screen.getAllByText(subTitle).length).toBe(1);

     })

});
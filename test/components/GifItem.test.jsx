import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test en <GifItem />", () => {
  const title = "Dragon Ball";
  const url = "https://dragon-ball.com/goku.jpg";

  test("Debe coincidor con la snapshot", () => {
    // Utilizar para componentes estáticos, nunca dimámicos ya que las snapshots no coincidirían eventualmente
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de encontrar un texto", () => {
    // Método de prueba pero no utilizado normalmente, se recomienda utilizar 'screen'
    const { getByText } = render(<GifItem title={title} url={url} />);

    expect(getByText(title)).toBeTruthy();
  });

  test("Encontrar por test-id", () => {
    const { getByTestId } = render(<GifItem title={title} url={url} />);

    // Espera que contenga estrictamente solo el texto
    expect(getByTestId("test-title").innerHTML).toBe(title);
    // Espera que contenga el texto de cualquier forma
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe mostrar la URL y ALT", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole('img');

    expect(src).toContain(url);
    expect(alt).toContain('gif');
  });
});
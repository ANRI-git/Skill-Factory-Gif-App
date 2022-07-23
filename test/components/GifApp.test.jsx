import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { GifApp } from "../../src/GifApp";

describe("Test en componente principal <GifApp />", () => {
  
  test("Debe regresar el estado inicial", () => {
    // Busca algún botón y título de categoría por medio de test-id, que no debe de existir aún:

    render(<GifApp />);

    expect(screen.queryByRole("heading", { level: 3 })).toBeFalsy();

    expect(screen.queryByTestId("category-button")).toBeFalsy();

    // screen.debug();
  });

  test("Debe renderizar categorias", () => {
    // Verifica la renderización de botón y título de categoria cuando se realiza un submit
    render(<GifApp />);

    const inputValue = "The Boys";
    const input = screen.getByRole("searchbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(screen.queryByRole("heading", { level: 3 })).toBeTruthy();

    expect(screen.queryByTestId("category-button")).toBeTruthy();

    // screen.debug();
  });

});

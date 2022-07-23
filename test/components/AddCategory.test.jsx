import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
import { GifApp } from "../../src/GifApp";

describe("Test en <AddCategory />", () => {

  test("Debe cambiar el valor del input", () => {
    render(
      <AddCategory
        addCategory={() => {}}
        removeCategory={() => {}}
        resetCategories={() => {}}
        categoriesList={[]}
      />
    );

    const input = screen.getByRole("searchbox");

    fireEvent.change(input, { target: { value: "Goku" } });

    expect(input.value).toBe("Goku");
  });

  test("Debe llamar a la función addCategory si el input tiene valor", () => {
    const inputValue = "Goku";

    const addCategory = jest.fn();

    render(
      <AddCategory
        addCategory={addCategory}
        removeCategory={() => {}}
        resetCategories={() => {}}
        categoriesList={[]}
      />
    );

    const input = screen.getByRole("searchbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: inputValue } });

    fireEvent.submit(form);

    // screen.debug();

    expect(input.value).toBe("");

    expect(addCategory).toHaveBeenCalled();

    expect(addCategory).toHaveBeenCalledTimes(1);

    expect(addCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debería llamar al addCategory si el input está vacío", () => {

    const addCategory = jest.fn();
    
    render(
      <AddCategory
      addCategory={addCategory}
      removeCategory={() => {}}
      resetCategories={() => {}}
      categoriesList={[]}
      />
      );
      
      const form = screen.getByRole("form");
      
      fireEvent.submit(form);
      
      expect(addCategory).not.toHaveBeenCalled()
    });
    
    test("Debe borrar todas las categorias", () => {
      // Prueba de funcionalidad RESET, se hace import de GifApp para que pueda funcionar
    render(<GifApp />);
    
    const inputValue = "Dragon Ball";
    const input = screen.getByRole("searchbox");
    const form = screen.getByRole("form");
    const reset = screen.getByRole("button", {name: 'reset'});
    
    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    fireEvent.click(reset);

    expect(screen.queryByRole("heading", { level: 3 })).toBeFalsy();

    expect(screen.queryByTestId("category-button")).toBeFalsy();

    screen.debug();
  });
  
});

import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src/hooks/useFetchGif";

describe("Test en hook useFetchGifs", () => {

  test("Debe regresar el estado inicial", () => {

    const { result } = renderHook(() => useFetchGif("Dragon Ball"));

    console.log(result.current.gifs);

    const { gifs, loading } = result.current;

    expect(gifs.length).toBe(0);
    expect(loading).toBeTruthy();

  });

  test("Debe retornar un arreglo de gifs y el loading false", async () => {

    const { result } = renderHook(() => useFetchGif("Dragon Ball"));

    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0)
    );
    
    const { gifs, loading } = result.current;
  
    expect(gifs.length).toBeGreaterThan(0);
  
    expect(loading).toBeFalsy();

    });
    

});

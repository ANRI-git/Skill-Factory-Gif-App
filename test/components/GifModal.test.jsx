import { fireEvent, render, screen } from "@testing-library/react";
import { GifModal } from "../../src/components/GifModal";

describe("Test en <GifModal />", () => {

  test("Estado inicial", () => {
    render(<GifModal />);

    const title = "Gif title";
    const url = "...";
    const open = screen.getByRole("button");
    fireEvent.click(open);
    const { src } = screen.getByRole("img");

    expect(screen.getByText(title)).toBeTruthy();
    // console.log(src);
    expect(src).toBe(`http://localhost/${url}`);

    // screen.debug();
});

test('Pueba GIF renderizado', () => {
    const title = "Kimetsu no yaiba";
    const url = "http://kimetsu-no-yaiba.com/tanjiro.jpg";
    render(<GifModal title={title} url={url} />);
    
    const open = screen.getByRole("button");
    fireEvent.click(open);
    
    const { src, alt } = screen.getByRole('img');
    
    expect(screen.getByText('Kimetsu no yaiba').innerHTML).toContain(title);
    expect(src).toContain(url);
    expect(alt).toContain('gif');
    
    screen.debug();
})
});

import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock('../../src/hooks/useFetchGif');

describe('Test en <GifGrid />', () => {
    
    const category = 'One Punch';

    test('Debe mostrar inicialmente el loading ', () => {
        
        useFetchGif.mockReturnValue({
            gifs: [],
            loading: true
        });
        
        render( <GifGrid category={category} /> );

        expect( screen.getByText( 'Loading GIFS...' ).innerHTML ).toBe('Loading GIFS...');
        expect( screen.getByText(`Gifs found with '${category}':`).innerHTML ).toBe(`Gifs found with '${category}':`);

        expect( screen.getByText(`Gifs found with '${category}':`));

    });

    test('Debe mostrar items, cuando se cargan los GIFS en useFetchGifs', () => {
        
        useFetchGif.mockReturnValue({
            gifs:[
                {id:'adScxWeRnsXasjkTh', title: 'Saitama', url:'https://onepunch/saitama.jpg'},
                {id:'yYTgfvbKHaVxcXaxQ', title: 'Garou', url:'https://onepunch/garou.jpg'},
            ],
            loading: false,
        })

        render( <GifGrid category={category} /> )
        
        expect( screen.getAllByRole('img').length ).toBe(2)

    });

});
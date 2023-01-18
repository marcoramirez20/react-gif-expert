import {render, screen} from '@testing-library/react';
import {GifGrid} from '../../src/components';
import {useFetchGifs} from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')

describe('Tests of GifGrid', () => {

    const category = 'Dragon Ball'

    test('Should show loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)

        expect(screen.getByText('Cargando ...'))
        expect(screen.getByText(category))
    })

    test('Should show items after call useFetchGifs', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'Vegeta',
                url: 'https://localhost/vegeta.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render(<GifGrid category={category} />)

        expect(screen.getAllByRole('img').length).toBe(2)

    })
});
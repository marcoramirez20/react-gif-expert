import {renderHook, waitFor} from '@testing-library/react';
import {useFetchGifs} from '../../src/hooks/useFetchGifs';

describe('Test of useFetchGifs', () => {

    test('Should return inicial state', () => {
        const {result} = renderHook(() => useFetchGifs('Dragon Ball'))
        const {images, isLoading} = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('Should return an image array and isLoading false', async () => {
        const {result} = renderHook(() => useFetchGifs('Dragon Ball'))
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
        const {images, isLoading} = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
});
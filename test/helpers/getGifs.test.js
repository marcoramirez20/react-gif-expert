import {getGifts} from '../../src/helpers/getGifs';

describe('Test of GetGifs', () => {

    test('Should return a gifs array', async () => {
        const gifs = await getGifts('Dragon Ball')
        // console.log(gifs)
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
});
import {render, screen} from '@testing-library/react';
import {GifExpertApp} from '../src/GifExpertApp';

describe('Test of GifExpertApp', () => {

    test('Should show default page', () => {
        render(<GifExpertApp />)
        expect(screen.getByText('GifExpertApp')).toBeTruthy()
    })
});
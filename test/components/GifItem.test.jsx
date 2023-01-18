import {render, screen} from "@testing-library/react";
import {GifItem} from "../../src/components";

describe('Tests of GifItem', () => {

    const title = 'Dragon Ball'
    const url = 'http://dragon.ball/goku.jpg'

    test('Should match with snapshot', () => {
        const {container} = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('Should be exists image source and alternative text', () => {
        render(<GifItem title={title} url={url} />)
        // screen.debug()
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })

    test('Should show the title in the component', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText).toBeTruthy()
    })
});
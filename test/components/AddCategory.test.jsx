import {fireEvent, render, screen} from '@testing-library/react';
import {AddCategory} from '../../src/components';

describe('Test of AddCategory', () => {

    test('', () => {
        render(<AddCategory onNewCategory={() => {}} />)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: "Goku" } })
        // screen.debug()
        expect(input.value).toBe("Goku")
    })

    test('Should call onNewCategory if input has a value', () => {
        const inputValue = 'Goku'
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('Shouldn\'t call onNewCategory if input is empty', () => {
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />)
        const form = screen.getByRole('form')

        fireEvent.submit(form)

        expect(onNewCategory).not.toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(0)
    })
});
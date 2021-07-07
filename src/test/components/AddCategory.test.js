import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn()
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> )

    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> )
    })

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()

    })

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        input.simulate('change', { target: { value: value } })

        expect(wrapper.find('p').text().trim()).toBe( value )
    })

    test('No debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled()
    })

    test('debe de llamar el setcategories y limpiar la caja de texto', () => {

        const value = 'Hola Mundo'

        //1. simular el inputChange
        const input = wrapper.find('input')
        input.simulate('change', { target: { value } })

        //2. simular el submit
        const form = wrapper.find('form')
        form.simulate('submit', { preventDefault(){} })

        //3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled()
        //3.1 Que ha sido llamada X veces
        //expect(setCategories).toHaveBeenCalledTimes(2)
        //3.2 Que ha sido llamada como una funcion
        //expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        //4. el valor del input debe de estar ''
        expect(input.prop('value')).toBe('')

        
    })
     
})

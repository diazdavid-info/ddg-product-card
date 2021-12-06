import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard } from '../../src'
// @ts-ignore
import { product } from '../data/products'

const { act } = renderer

describe('ProductCard', () => {
    test('Should show correctly', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product }>
                {
                    () => (
                        <h1>Product card</h1>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('Should increment counter', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product }>
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button onClick={ () => increaseBy(1) }>test</button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree: any = wrapper.toJSON()
        expect(tree).toMatchSnapshot()

        act(() => {
            tree.children[2].props.onClick()
        })

        tree = wrapper.toJSON()

        expect(tree.children[1].children[0]).toBe('1')
    })
})

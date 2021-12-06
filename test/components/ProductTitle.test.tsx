import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src'
// @ts-ignore
import { product } from '../data/products'

describe('ProductTitle', () => {
    test('Should show correctly with custom title', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className="custom-class" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('Should show correctly with name product', () => {
        const wrapper = renderer.create(
            <ProductCard product={product}>
                {
                    () => (
                        <ProductTitle/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})

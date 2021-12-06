import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src'
// @ts-ignore
import { product2 } from '../data/products'

describe('ProductImage', () => {
    test('Should show correctly with custom img', () => {
        const wrapper = renderer.create(
            <ProductImage img="nothing.png" className="custom-class" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('Should show correctly with img product', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})

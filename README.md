# ddg-product-card

Este es un paquete de pruebas de despliege en npm

### David Díaz

## Ejemplo
```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'ddg-product-card'
```

```
<ProductCard
    product={ product }
    initialValues={ { count: 4, maxCount: 10 } }
>
    {
        ({ count, maxCount, reset, isMaxCountReached, increaseBy }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```

import products from '../products'
import ProductCard from './ProductCard'

export default function ProductsContainer(props) {
    const { language, onAddProduct } = props
    return (
        <div className='products-container'>
            <div className='container'>
                {products.map(product => (
                    <ProductCard
                        onAddProduct={onAddProduct}
                        language={language}
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}
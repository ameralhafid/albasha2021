import HomosImage from '../static/images/homos.jpg'

export default function ProductCard(props) {
    const { product, language, onAddProduct } = props

    return (
        <div className='product-card'>
            <div className='product-card-height'>
                <div className='product-card-image'>
                    <img src={HomosImage} />
                </div>
                <div className='product-card-title'>
                    {product.title[language]}
                </div>
                <div className='product-card-footer'>
                    <div className='product-card-price'>
                        {`${product.price.value}${product.price.currency}`}
                    </div>
                    <div className='product-card-button'>
                        <button onClick={() => onAddProduct(product)}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
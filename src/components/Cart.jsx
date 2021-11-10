import XLogo from '../static/images/x.svg'
import TrashLogo from '../static/images/trash.svg'
import WhatsappLogo from '../static/images/whatsapp.svg'

import languages from '../languages'

export default function Cart(props) {
    const { cart, onToggleCart, language, onRemoveProduct, total, orderText, whatsappNumber } = props
    return (
        <div className='cart-container'>
            <div className='cart-container-overlay' onClick={onToggleCart}></div>
            <div className='real-cart-container'>
                <div className='cart-header'>
                    {languages[language].cart.title}
                    <button className='logo-btn' onClick={onToggleCart}><img src={XLogo} /></button>
                </div>
                <div className='cart-content'>
                    {
                        !cart.length ?
                            <div className='cart-content-empty'>{languages[language].cart.empty}</div> :
                            <>
                                {cart.map((el, i) => (
                                    <div className='cart-element' key={i}>
                                        <div className='cart-element-amount-and-title'>
                                            {`${el.amount}X ${el.title[language]}`}
                                        </div>
                                        <div className='cart-element-price'>{`${el.price.value * el.amount}${el.price.currency}`}</div>
                                        <div className='remove-element-from-cart'>
                                            <button
                                                className='logo-btn'
                                                onClick={() => onRemoveProduct(i)}
                                            ><img src={TrashLogo} /></button>
                                        </div>
                                    </div>
                                ))}

                                <div className='cart-total-price'>
                                    <div>{languages[language].cart.total}:</div>
                                    {total}
                                </div>
                                <a className='cart-order-button' href={`https://wa.me/${whatsappNumber}/?text=${orderText}`}>
                                    {languages[language].cart.button}
                                    <img src={WhatsappLogo} />
                                </a>
                                {/* <button className='cart-order-button'>

                                </button> */}
                            </>
                    }

                </div>
            </div>

        </div>
    )
}
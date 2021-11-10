import { useState } from 'react'
import languages from './languages'

import Header from './components/Header'
// import Navbar from './components/Navbar'
import ProductsContainer from './components/ProductsContainer'

import Footer from './components/Footer'
import Cart from './components/Cart'
import CategoriesCarousel from './components/CategoriesCarousel'

function App() {
  // const [showNav, setShowNav] = useState(false)
  const [language, setLanguage] = useState('english')
  const [scrolled, setScrolled] = useState(0)
  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [orderText, setOrderText] = useState('')

  const whatsapp_number = '4917670288248'

  const handle_scroll = (e) => {
    setScrolled(e.target.scrollTop)
  }

  const add_product = (product) => {
    if (!product) return
    let new_cart = [...cart]
    const found = new_cart.findIndex(el => el.id === product.id)
    if (found < 0) {
      new_cart.push({ id: product.id, title: product.title, amount: 1, price: product.price })
    }
    else {
      new_cart[found].amount++
    }

    let new_total = 0
    let new_order_text = ''
    for (let i = 0; i < new_cart.length; i++) {
      new_total += new_cart[i].amount * new_cart[i].price.value
      new_order_text += `${new_cart[i].amount}x ${new_cart[i].title[language]}\n`
    }
    setOrderText(new_order_text)
    setTotal(new_total)
    setCart(new_cart)

  }

  const remove_product = (index) => {
    let new_cart = [...cart]
    new_cart.splice(index, 1)

    let new_total = 0
    let new_order_text = ''
    for (let i = 0; i < new_cart.length; i++) {
      new_total += new_cart[i].amount * new_cart[i].price.value
      new_order_text += `${new_cart[i].amount}x ${new_cart[i].title[language]}\n`
    }
    setOrderText(new_order_text)
    setTotal(new_total)
    setCart(new_cart)
  }

  const send_cart = () => {

  }

  return (
    <div className={`App ${language === 'arabic' ? 'arabic' : ''} ${scrolled > 250 ? 'scrolled' : ''}`} onScroll={handle_scroll}>
      {/* <Header onShowNavbar={() => setShowNav(!showNav)} /> */}
      <Header onToggleCart={() => setShowCart(!showCart)} cart={cart.length !== 0} name={languages[language]?.name} onLanguageChange={(e) => setLanguage(e.target.value)} />
      <div className='landing'>
        <div className='landing-content'>
          {languages[language]?.hero}
        </div>
      </div>
      < CategoriesCarousel />
      {showCart && <Cart cart={cart} onToggleCart={() => setShowCart(!showCart)} language={language} onRemoveProduct={remove_product} total={total} orderText={orderText} whatsappNumber={whatsapp_number} />}
      <ProductsContainer language={language} onAddProduct={add_product} />
      <Footer language={language} />
      {/* {showNav && <Navbar onShowNavbar={() => setShowNav(!showNav)} onChangeLanguage={e => setLanguage(e.target.value)} language={language} />} */}
    </div>
  )
}

export default App

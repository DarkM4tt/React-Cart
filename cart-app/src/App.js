import React from 'react'

import Cart from './components/Cart'
import Navbar from './components/Navbar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [
        {
          id: 1,
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4R6rhDM8Agc_8yYulXDaELFd1AZdvZXUuRA&usqp=CAU',
        },
        {
          id: 2,
          price: 99,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugaXMZ2tbxPRinQkFP_uR1_tTePJXSTdEHQ&usqp=CAU',
        },
        {
          id: 3,
          price: 99,
          title: 'Laptop',
          qty: 4,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lecz3tKZWz5urAs3jM2ah4AuMGF3W6Il-w&usqp=CAU',
        },
      ],
    }
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state
    const index = products.indexOf(product)

    products[index].qty += 1
    this.setState({
      products: products,
    })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state
    const index = products.indexOf(product)

    products[index].qty =
      products[index].qty !== 0 ? products[index].qty - 1 : 0

    this.setState({
      products: products,
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state
    const items = products.filter((item) => item.id !== id)

    this.setState({
      products: items,
    })
  }

  getCartCount = () => {
    const { products } = this.state
    let count = 0
    products.forEach((product) => {
      count += product.qty
    })
    return count
  }

  getCartTotal = () => {
    const { products } = this.state

    let cartTotal = 0

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })
    return cartTotal
  }

  render() {
    const { products } = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    )
  }
}

export default App

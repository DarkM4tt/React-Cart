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
          img: '',
        },
        {
          id: 2,
          price: 99,
          title: 'Mobile Phone',
          qty: 10,
          img: '',
        },
        {
          id: 3,
          price: 99,
          title: 'Laptop',
          qty: 4,
          img: '',
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
      </div>
    )
  }
}

export default App

import React from 'react'

import CartItem from './CartItem'

class Cart extends React.Component {
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

    // if (products[index].qty === 0) {
    //   products[index].qty = 0
    // } else {
    //   products[index].qty -= 1
    // }

    products[index].qty =
      products[index].qty !== 0 ? products[index].qty - 1 : 0

    this.setState({
      products: products,
    })
  }

  render() {
    const { products } = this.state
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              key={product.id}
              product={product}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
            />
          )
        })}
      </div>
    )
  }
}

export default Cart

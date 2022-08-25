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

  render() {
    const { products } = this.state
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem key={product.id} product={product} />
        })}
      </div>
    )
  }
}

export default Cart

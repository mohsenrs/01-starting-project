import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
      <ul>
        <li>
          <Link to='products/p1'>product1</Link>
        </li>
        <li>
          <Link to='products/p2'>product2</Link>
        </li>
        <li>
          <Link to='products/p3'>product3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Products

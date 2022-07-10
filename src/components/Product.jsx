import React from 'react'

function Product(props) {
    const {product, onAdd} = props;
    const hdlClickAdd = () =>{
        onAdd(product)
    }
  return (
    <div className='Product'>
      <img className='small' src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
          <button onClick={hdlClickAdd}>Add to Cart</button>
      </div>
    </div>
        
  )
}

export default Product

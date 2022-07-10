import React from 'react'

function Basket(props) {
    const{cartItems,onAdd,onRemove} = props
    let itemsPrices = cartItems.reduce((a,c) => a +c.price * c.qty,0) 
    let tax = itemsPrices* 0.1
    let shipping = itemsPrices >2000 ? 0 : 50
    let total = itemsPrices + tax +shipping
  return (
    <aside className='col-1 block'>
        <h2>Cart Items</h2>
        <div>{cartItems.length === 0 && <div>Cart Empty </div>}</div>
        {cartItems.map(item => (
             <div  key ={item.id} className='row'>
             <div>{item.name}</div>
             <div>
 
             <button className='add'onClick={() => onAdd(item)}>
                 +
             </button>
             <button className='remove' onClick={() => onRemove(item)}>
                 -
             </button>
             </div>
             
             <div className='col-2 text-right'>
                {item.qty} x {item.price.toFixed(2)}
             </div>
         </div>
        ))}

        <hr />
            <div className='row'>
                <div className='col-2'>Item Price</div>
                <div className='col-1 text-right'>${itemsPrices}.00</div>
            </div>
            <div className='row'>
                <div className='col-2'>Tax</div>
                <div className='col-1 text-right'>${tax}</div>
            </div>
            <div className='row'>
                <div className='col-2'>Shipping</div>
                <div className='col-1 text-right'>${shipping}</div>
            </div>
            <div className='row text-bold'>
                <div className='col-2'>Total</div>
                <div className='col-1 text-right'>${total}</div>
            </div>

    
     
    
    </aside>
  )
}

export default Basket

import React from 'react'


function Header(props) {
    const {cartItems} = props
  return (
    <header className='row block center'>
        <div>
            <a href="#">
                <h1>Anotter Day Shop</h1>
            </a>
        </div>
        <div>
            <a href="#">
                <h3>Cart <button>{cartItems.length}</button></h3>
            </a>
        </div>
    </header>
  )
}

export default Header

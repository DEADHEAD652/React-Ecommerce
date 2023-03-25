import React from 'react'

function Product(props) {
  const {id,ProductName,Price,ProductImage} = props.data
    return (
    <div className='product'>

        <img src={ProductImage}/>
         
         <div className="description">
            <p><b>{ProductName}</b></p>
            <p> ${Price}</p>
         </div>
         <button className='addToCartBttn '>Add to Cart</button>
    </div>
  )
}

export default Product
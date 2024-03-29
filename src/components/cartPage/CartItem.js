import React from 'react'
import {FaTrash,FaChevronCircleUp,FaChevronCircleDown} from 'react-icons/fa'


export default function CartItem({cartItem,increment,decrement,removeItem}) {
    console.log("hahsxa")
    console.log(cartItem)

  

   const {id,name,price,count,total,image} = cartItem;

 
    return (
        <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
        {/* image */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={`../${image}`} alt="product" width="60" className="image-fluid"/>
 
        </div>


        {/* end image */}

        {/* title */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
             
                <span className="d-lg-none">Course: </span> {name}
            </div>
            {/* title */}

            {/* price */}
            <div className="col-10 mx-auto col-lg-2 pb-2">

                <span className="d-lg-none">price: </span> Rs.{price}
            </div>
            {/* end of price */}

        {/* count controls */}
       


        {/* end of count controls */}

            {/* remove item */}
            <div className="col-10 mx-auto col-lg-2">

               <FaTrash className="text-danger cart-icon" onClick={()=>removeItem(id)}></FaTrash>
            </div>
            {/* end remove item */}

        {/* item total */}
<div className="col-10 mx-auto col-lg-2">
    <strong className="text-muted">Item Total: Rs.{total}</strong>

</div>

        {/* end item total */}
        </div>
    )
}



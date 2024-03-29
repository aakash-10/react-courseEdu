import React from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../../context'
import { FaBold } from 'react-icons/fa';


function ProductFilter() {
    return (
        <ProductConsumer>
            {value =>{
        const  {search,min,max,company,price,shipping,handleChange,
        storeProducts} = value ;
        let companies = new Set()
        companies.add('all')
        for(let product in storeProducts){
            companies.add(storeProducts[product]['company'])
        }

        companies = [...companies]

return (
    <div className="row my-5">
        <div className="col-10 mx-auto">
<FilterWrapper>
    {/* text search */}
    <div>
                    <label htmlFor="search">Search Courses</label>
                    <input type="text" name="search" id="search" onChange={handleChange} value={search} 
                         className="filter-item"/>
                    {/*end of text search */}

                    {/* category search */}
    </div>
   




                {/* price range */}
<div >
<label htmlFor="price">
<p className="mb-2">Price: <span>Rs.{price}</span></p>
</label>
<input type="range" name="price" id="price" min={min}
max={max} className="filter-price" value={price} onChange={handleChange}></input>
</div>

                {/* end price range */}

             


</FilterWrapper>
        </div>

    </div>
)


            }}
        </ProductConsumer>
    )
}

const FilterWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 2rem;
grid-row-gap: 1rem;
label{
    font-weight: bold;
    text-transform: uppercase;
    
}
.filter-item,
.filter-price{
    display:block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
}



`;

export default ProductFilter

import React, { Component } from 'react'
// interface Props {
//     list: [{}]
// }
const ProductRow: React.FC = (props) => {
    const listItem = props.list.map(item => {
        return <p key={item.name}><span className={item.stocked ? '' : 'nonstock'}>{item.name}</span><span className='price'>{item.price}</span></p>
    })
    return (
        <div>
            {listItem}
        </div>
    )
}
export default ProductRow
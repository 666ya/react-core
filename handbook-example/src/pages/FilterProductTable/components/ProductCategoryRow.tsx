import React from 'react'
// interface Props {
//     category?: string
//     children?: []
// }
const ProductCategoryRow: React.FC = (props) => {
    return (
        <div className='category'>
            <p className='title'>{props.category}</p>
            {props.children}
        </div>
    )
}
export default ProductCategoryRow
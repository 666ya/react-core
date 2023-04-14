import React from 'react'
import ProductCategoryRow from './ProductCategoryRow.tsx';
import ProductRow from './ProductRow.tsx';
// interface Props {
//     children?: 
// }
const ProductTable: React.FC = (props) => {
    const SportingList = props.filterList.filter(item => item.category === 'Sporting Goods')
    const electronicsList = props.filterList.filter(item => item.category === 'Electronics')
    return (
        <div>
            <p className='title'>
                <span>Name</span>
                <span className='price'>Price</span>
            </p>
            <ProductCategoryRow category={'Sporting Goods'}>
                <ProductRow list={SportingList}></ProductRow>
            </ProductCategoryRow>
            <ProductCategoryRow category={'Electronics'}>
                <ProductRow list={electronicsList}></ProductRow>
            </ProductCategoryRow>
        </div >
    )
}

export default ProductTable;

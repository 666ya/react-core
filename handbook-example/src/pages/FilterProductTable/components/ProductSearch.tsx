import React from 'react'
// interface ProductSearchProps {

// }

// interface ProductSearchState {

// }
const ProductSearch: React.FC = (props) => {
    const handlerNameChange = (e) => {
        props.onSearchNameChange(e.target.value)
    }
    const handlerCheckedChange = (e) => {
        props.onStockedChecked(e.target.checked)
    }
    return (
        <div>
            <input
                placeholder='Search……'
                onChange={handlerNameChange}
            />
            <br />
            <input
                type='checkbox'
                onChange={handlerCheckedChange}
            />
            Only show products in storck
        </div>
    );
}

export default ProductSearch;
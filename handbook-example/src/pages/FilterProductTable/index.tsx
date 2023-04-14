import React, { useEffect, useState } from 'react'
import ProductSearch from './components/ProductSearch.tsx';
import ProductTable from './components/ProducTable.tsx';

import './index.css'

const productList = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
]

type SearchDataType = {
    name?: string;
    stocked?: string | boolean
}
const FilterProductTable: React.FC = () => {
    const [searchData, setSearchData] = useState<SearchDataType>({
        name: '',
        stocked: ''
    })
    const [filterList, setFilterList] = useState(productList)
    const handleStockedChecked = (checked: boolean) => {
        setSearchData({
            stocked: checked ? checked : '',
            name: searchData.name
        })
    }
    const handleSearchNameChange = (name: string) => {
        setSearchData({
            name: name,
            stocked: searchData.stocked
        })
    }
    useEffect(() => {
        let list
        if (searchData.name === '' && searchData.stocked === '') {
            list = productList
        } else if (searchData.name && searchData.stocked) {
            list = productList.filter(item => item.name === searchData.name && item.stocked)
        } else if (searchData.name === '') {
            list = productList.filter(item => item.stocked)
        } else {
            list = productList.filter(item => item.name === searchData.name)
        }
        setFilterList(list)
    }, [searchData])
    return (
        <div>
            {/* 搜索框 */}
            <ProductSearch
                onStockedChecked={handleStockedChecked}
                onSearchNameChange={handleSearchNameChange}
            />
            {/* 产品列表 */}
            <ProductTable filterList={filterList} />
        </div>
    );
}
export default FilterProductTable;
import React, { useEffect } from 'react'

const List = (props)=> {
    console.log('list')
    useEffect(()=> {
        console.log('aaa')
    },[props.list])
    return (
        <ul>
            <li>aaaa</li>
        </ul>
    )
}
export default List
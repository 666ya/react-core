import React, { useState } from 'react'
import List from './list'

const App = ()=> {
    const [count,setCount] = useState(1)
    const handleClick = ()=> {
        setCount(prev => prev + 1)
    }
    const list = [
        {
            name: '1',
            age: '2',
            key: '4'
        },
        {
            name: '2',
            age: '3',
            key: '5'
        }
    ]
    return (
        <>
        <div>
            {count}
            <button onClick={handleClick}>增加</button>
        </div>
        <List list={list}/>
        </>
      
    )
}

export default App
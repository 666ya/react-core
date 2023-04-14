import { useState } from "react"
import { useTasksDidpatch } from "./TaskContext"

export default function AddTask(second) {
    const [inputValue,setInputValue] = useState('')
    const dispatch = useTasksDidpatch()
    return (
        <>
        <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        <button className="addBtn" onClick={()=> {
            setInputValue('')
            dispatch({
                type: 'add',
                id: nextId++,
                text: inputValue
            })
        }}>添加</button>
        </>
    )
}
let nextId = 3;
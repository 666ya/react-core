import { useState } from "react"

export default function AddTask({onAddTask}){
    const [inputValue,setInputValue] = useState('')
    function handleClick(){
        if(inputValue.trim() === '') {
            alert('请输入任务名称')
            return
        }
        setInputValue('')
        onAddTask(inputValue)
        
    }
    function handleChange(e){
        setInputValue(e.target.value)
    }
    return (
        <>
        <input value={inputValue} onChange={handleChange}/>
        <button className="addBtn" onClick={(handleClick)}>添加</button>
        </>
    )
}
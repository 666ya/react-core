import { useEffect, useState } from "react"

export default function TaskList(props) {
    const [taskList,setTaskList] = useState([])
    useEffect(()=> {
        const list = props.taskList.map(item=> ({...item,isEdit: item.isEdit || false}))
        setTaskList(list)
    }, [props.taskList])
    function handleChange(event,id){
        const nextTaskList = taskList.map(item => {
            if(id === item.id) {
                return {
                    ...item,
                    text: event.target.value
                }
            } else {
                return item
            }
           })
           setTaskList(nextTaskList)
    }
    function handleEdit(id){
       const nextTaskList = taskList.map(item => {
        if(id === item.id) {
            return {
                ...item,
                isEdit: true
            }
        } else {
            return item
        }
       })
       setTaskList(nextTaskList)
    }
    function handleSave(id){
        // const nextTaskList = taskList.map(item => {
        //     if(id === item.id) {
        //         return {
        //             ...item,
        //             isEdit: false
        //         }
        //     } else {
        //         return item
        //     }
        //    })
        //     // setTaskList(nextTaskList)
        //     props.onChangeTask(nextTaskList)
        const task = taskList.filter(item=> item.id === id)
        props.onChangeTask({
            ...task, isEdit: false
        })
    }
    function handleChangeDone(id){
        // const nextTaskList = taskList.map(item => {
        //     if(id === item.id) {
        //         return {
        //             ...item,
        //             done: !item.done
        //         }
        //     } else {
        //         return item
        //     }
        //    })
        const task = taskList.filter(item=> item.id === id)
        props.onChangeTask({
            ...task,
            done: !task.done
        })
    }
    function handleDelete(id){
        props.onDeleteTask(id)
    }
    return (
        <ul className="taskList">
            {
                taskList.map(item=> (
                    <li key={item.id}>
                         <input type="checkbox" defaultChecked={item.done} onClick={()=> handleChangeDone(item.id)}/>
                        {
                            item.isEdit ?  <input value={item.text} onChange={(event)=>handleChange(event,item.id)}/> : <span>{item.text}</span>
                        }
                        {
                            item.isEdit ?   <button onClick={()=> handleSave(item.id)}>{ '保存' }</button> : <button onClick={() => handleEdit(item.id)}>{ '编辑'}</button>
                        }
                       
                        <button onClick={()=>handleDelete(item.id)}>删除</button>
                      
                    </li>
                ))
            }
        </ul>
    )
}


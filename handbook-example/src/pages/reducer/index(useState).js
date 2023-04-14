import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import './style.css'

export default function TaskApp(){
    const [taskList,setTaskList] = useState([
        { id: 0, text: '参观卡夫卡博物馆', done: true },
        { id: 1, text: '看木偶戏', done: false },
        { id: 2, text: '列侬墙图片', done: false }
    ])
    function handleAddTask(text){
        setTaskList(prev => {
            let nextItem = {
                text,
                done: false
            }
           if(prev.length === 0) {
            nextItem.id=0
           } else {
            nextItem.id = prev[prev.length-1].id + 1
           }
           return [...prev,nextItem]
        })
    }
    // function handleChangeTask(newTaskLit){
    //     setTaskList(taskList)
    // }
    function handleChangeTask(task){
       const newTaskLit = taskList.map(item => {
        if(item.id === task.id) {
            return task
        }else {
            return item
        }
       })
       setTaskList(newTaskLit)
    }
    function handleDeleteTask(id){
        const newTaskLit = taskList.filter(item=> item.id !== id)
        setTaskList(newTaskLit)
    }
    return (
        <>
        <h1>布拉格行程</h1>
        <AddTask onAddTask={handleAddTask}/>
        <TaskList taskList={taskList} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
        </>
    )
}
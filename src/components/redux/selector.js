import { createSelector } from '@reduxjs/toolkit'


export const todoListSelector = (state) => state.todoList

// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state)
//     const todoRemain = state.todoList.filter((todo) => {
//         return todo.name.toLowerCase().includes(searchText.toLowerCase())
//     })
//     return todoRemain
// }

export const searchTextSelector = (state) => state.filters.search

export const statusFilterSelector = (state) => state.filters.status

export const prioritiesFilterSelector = (state) => state.filters.priorities

//reselect

export const todoRemainSelector = createSelector(todoListSelector, searchTextSelector, statusFilterSelector, prioritiesFilterSelector, (todoList, searchText,status, priorities) => {
    return todoList.filter((todo) => {
        if (status === 'All') {
            return priorities.length ? todo.name.includes(searchText) && priorities.includes(todo.priority) : todo.name.includes(searchText)
        }
        return (status === 'Completed' ? todo.completed : !todo.completed) && (priorities.length ? priorities.includes(todo.priority) : true)
    })
})

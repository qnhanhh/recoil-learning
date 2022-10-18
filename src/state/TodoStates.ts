import { atom, selector } from 'recoil'

import { TodoContent } from './../types.d';

export const todoListState = atom<TodoContent[]>({
    key: 'todoList',
    default: []
})

export const todoListFilteredState = atom<string>({
    key: 'todoListFiltered',
    default: 'Show All'
})

export const filteredTodoListState = selector({
    key: 'filteredTodoList',
    get: ({ get }) => {
        const filter = get(todoListFilteredState)
        const list = get(todoListState)

        switch (filter) {
            case 'Show Completed':
                return list.filter(item => item.isComplete)
            case 'Show Uncompleted':
                return list.filter(item => !item.isComplete)
            default:
                return list
        }
    }
})

export const todoListStatsState=selector({
    key:'todoListStats',
    get:({get})=>{
        const list=get(todoListState)
        const todoItems=list.length
        const completedItems=(list.filter(item=>item.isComplete)).length
        const uncompletedItems=todoItems-completedItems
        const percentage=todoItems===0?0:completedItems/todoItems*100

        return {todoItems, completedItems, uncompletedItems, percentage}
    }
})
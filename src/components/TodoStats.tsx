import {useRecoilValue} from 'recoil'

import { todoListStatsState } from '../state/TodoStates'

const TodoStats=()=>{
    const {todoItems, completedItems, uncompletedItems, percentage}=useRecoilValue(todoListStatsState)

    return(
        <ul>
            <li>Total items: {todoItems}</li>
            <li>Completed items: {completedItems}</li>
            <li>Uncompleted items: {uncompletedItems}</li>
            <li>Percent completed: {percentage}%</li>
        </ul>
    )
}

export default TodoStats
import { Todo } from "../Todo/Todo"
import { TodoFilters } from "../TodoFilters/TodoFilters"

const TodoList = ({todos, handleSetComplete, handleDelete, activeFilter, showActiveTodos, showAllTodos, showCompletedTodos, handleClearComplete }) => {
    return(
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl ">
            {todos.map(todo=>{
                return(
                    <Todo 
                    key={todo.id}  
                    todo={todo} 
                    handleDelete={handleDelete}
                    handleSetComplete ={ handleSetComplete } />
                )
            })}
            <TodoFilters 
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos} 
                showActiveTodos={showActiveTodos} 
                showCompletedTodos={showCompletedTodos} 
                handleClearComplete={handleClearComplete} />
        </div>
    )
}

export {TodoList}
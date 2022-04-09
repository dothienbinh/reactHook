const Todo = (props) => {
    const { todos, deleteDataTodo } = props;
    const handleDelete = (id) => {
        deleteDataTodo(id);
    }
    return (
        <div className='todos-container'>
            {todos.map(todo => {
                return (
                    <div className="" >
                        <li className='todo-child' key={todo.id} >{todo.title}
                            &nbsp; <span onClick={() => handleDelete(todo.id)}>x</span>
                        </li>
                    </div>
                )
            })}
        </div>
    )
}
export default Todo;
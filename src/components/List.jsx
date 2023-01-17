
const List = (props) => {



    const deleteTodo = (index) => {
        props.deleteTodo(index)
    }

    const completeTodo = (todo, index, checked) => {
        const newTodo = {...todo, complete: checked};
        props.completeTodo(newTodo, index)
    }

    return (
        <div className="container w-25 border border-2">
            <h4>List</h4>
            <table className="table table-striped table-hover table-borderless">
                <tbody>
                    {props.todos.map((todo, idx) => (
                        <tr className="align-middle" key={idx}>
                            <td><input className="form-check-input" type="checkbox" onClick={(e) => completeTodo(todo, idx, e.target.checked)} ></input></td>
                            <td><span className={todo.complete ? 'text-decoration-line-through' : ''}>{todo.description}</span></td>
                            <td><button className={`btn btn-danger ${todo.complete ? 'disabled' : ''}`} onClick={() => deleteTodo(idx)}> Eliminar </button></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}
export default List;
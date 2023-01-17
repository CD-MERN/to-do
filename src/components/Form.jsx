import {useState}  from 'react'




const Form = (props) => {
    const [todo, setTodo] = useState('');

    const addTodo = () => {

        if(todo.length){
            props.addTodo({description: todo, complete: false})
            setTodo('');
        }
        
    }

    return (
            <div className="container mb-3">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">To Do</label>
                            <input
                                type='text'
                                className='form-control'
                                name='todo'
                                value={todo}
                                onChange={e => setTodo(e.target.value)}
                            />
                        </div>
                        <button type="button" className={`btn btn-primary ${todo.length ? '' : 'disabled'}`} onClick={addTodo}>Add</button>
                    </div>
                </div>
            </div>
    );
}
export default Form;
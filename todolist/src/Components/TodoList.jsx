import React from 'react';
import "../styles/todo.css"
import { nanoid } from 'nanoid'
function TodoList(props) {
    const [todo, setTodo] = React.useState('');
    const [list, setList] = React.useState([]);
const handleChange = (e) => {
        setTodo(e.target.value)
    
    }
    const handleClick = () => {
        if(todo === "") return 
        let curr = {
            todo,
            id: nanoid(),
            status: false,
        }
        setList([...list,curr]);
        console.log(list);
        setTodo("")

    }
    const complete = (id) => {
        const done = list.map((el) => el.id === id ? {...el,status: true} : el);
        console.log(done)
    }
    const handleDelete = (del) => {
        console.log(del)
        let filtered = list.filter(el => el.id !== del);
        setList([...filtered]);
    }

  
    return (
        <div className="Body">
            <div className="todo-body">
                <div className="todo-head">
                   <img id="todo-icon" src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-book-education-justicon-flat-justicon-1.png" alt=""/>

                </div>
                <div className="todo-input">
                    <input value={todo} onChange={handleChange} type="text" placeholder="Input your todo" />
                    <img onClick={handleClick} src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-add-banking-and-finance-kiranshastry-gradient-kiranshastry.png"alt="" />
                </div>

                <div className="todo-Data">
                    {
                        list.map((el) => {
                            return (
                                <div style={{ color: el.status ? 'red' : 'blue' }} key={el.id}>
                                    <li key={el.id}>{el.todo}</li>
                                    <div className="todo-del">
                                        <img src="https://img.icons8.com/nolan/50/realtime-protection.png" onClick={()=>complete(el.id)}alt="" />
                                    <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-delete-miscellaneous-kiranshastry-gradient-kiranshastry.png"onClick={()=>handleDelete(el.id)}alt=""/>
                                    </div>
                                    
                                    
                                </div>
                            )
                        })
                    }

                </div>


            </div>        
        </div>
    );
}

export default TodoList;
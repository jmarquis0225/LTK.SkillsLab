import React from "react";
import {useSelector} from 'react-redux';
import { deleteTodoAction } from "../../store/TodoStore";

const TodoTable = () => {
    const data = useSelector(state => state);
    return(
        <div>
            {console.log(data)}
            <table>
                <thead>
                    <tr>
                        <td>Todo</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, ind)=>(
                        <tr key={ind}>
                            <td>{val.Add_ToDo}</td>
                            <td><button onClick={(ind)=>deleteTodoAction(ind)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TodoTable;
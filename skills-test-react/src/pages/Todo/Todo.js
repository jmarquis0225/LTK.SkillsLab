import React from "react";
import BasicForm from "../../components/Todo/BasicForm";
import TodoTable from "../../components/Todo/TodoTable";

const Todo = () => {
    return(
        <div>
            <div>
                <BasicForm/>
            </div>
            <div>
                <TodoTable/>
            </div>
        </div>
    );
}

export default Todo;
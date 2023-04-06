import { AddTodo, DeleteTodo } from "../constants/TodoConstants";

const todoReducer = (state=[{
    Add_ToDo: "Todo 1"
}], action) => {
    switch(action.type) {
        case AddTodo:
            return [
                ...state,
                {
                    Add_ToDo: action.payload.Add_ToDo
                }
            ];
        case DeleteTodo:
            let newState = state.map((val, index)=>{
                if(index != action.payload){
                    return val;
                }
            })
            return newState;
        default:
            return state;
    }
}

export default todoReducer;
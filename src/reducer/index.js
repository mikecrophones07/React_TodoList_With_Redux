const initialState = {
    todoList: []
}

export default (state = initialState, { type, payload }) => {
    switch(type){
        case "ADDITEMS":
            return{
                ...state,
                todoList: [...state.todoList, payload]
            };

        default:
            return state
    }
}
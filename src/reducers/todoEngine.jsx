const reducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, { id: action.id, text: action.text, count: action.count}];
    
        case 'REMOVE_TODO':
            const index = state.findIndex(todo => todo.id === action.id);
                return index > -1
                    ? [...state.slice(0, index), ...state.slice(index + 1)]
                    : state;

        default: 
            return state;
    }    
}

export { reducer }
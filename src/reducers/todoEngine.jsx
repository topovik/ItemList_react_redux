const reducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, { id: action.id, text: action.text, count: action.count, score: action.score}];
    
        case 'REMOVE_TODO':
            const index = state.findIndex(todo => todo.id === action.id);
                return index > -1
                    ? [...state.slice(0, index), ...state.slice(index + 1)]
                    : state;

        // case 'UP_TODO':
        // return state.map(todo => {
        //     if (todo.score !== todo.count) {
        //       return todo.score + 1;
        //     }
        //     return todo
        // })
                
        default: 
            return state;
    }    
}

export { reducer }
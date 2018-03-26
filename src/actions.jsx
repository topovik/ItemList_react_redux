export const todoAdd = (text, count, id) => {
    return {type: 'ADD_TODO', text: text, count: count, id: id}
}

export const todoRemove = (id) => {
    return {type: 'REMOVE_TODO', id: id}
}

// export const todoUp = (score, count) => {
//     return {type: 'UP_TODO', score: score, count: count}
// }
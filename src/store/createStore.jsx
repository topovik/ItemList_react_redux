import { createStore } from 'redux'
import  { reducer }  from '../reducers/todoEngine'

const store = createStore(reducer);

export { store }
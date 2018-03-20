import React, { Component } from 'react'
import Todo from './Todo'
import './css/TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props)

    props.store.subscribe(() => this.forceUpdate());

    }

    render() {
        const list = this.props.store.getState()
            .map(todo => 
            <Todo todo={todo} key={todo.id} store={this.props.store}/>
        )
        return(
            <section className='list'>
                { list }
            </section>
        );
    }
}

export default TodoList
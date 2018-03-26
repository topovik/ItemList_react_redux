import React, { Component } from 'react'
import Todo from './Todo'
import './css/TodoList.css'

class TodoList extends Component {
    render() {
        const list = this.props.state.map((todo) => {
            return <Todo todoRemove={this.props.todoRemove} todoUp={this.props.todoUp} todo={todo} key={todo.id} />
        }
    )
    console.log(list)

        return(
            <section className='list'>
                { list }
            </section>
        );
    }
}


export default TodoList



import React, { Component } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                <AddTodo store={this.props.store} />
                <TodoList store={this.props.store} />
            </section>
        );
    }
}

export default App
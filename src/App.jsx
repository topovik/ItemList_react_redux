import React, { Component } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { connect } from 'react-redux'
import { todoAdd, todoRemove } from './actions'

class App extends Component {

    render() {
        return (
            <section>
                <AddTodo todoAdd={this.props.todoAdd}/>
                <TodoList state={this.props.state} todoRemove={this.props.todoRemove} todoUp={this.props.todoUp} />
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        todoAdd: (text, count, id) => dispatch(todoAdd(text, count, id)),
        todoRemove: (id) => dispatch(todoRemove(id))

}}

export default connect (mapStateToProps, mapDispatchToProps)(App)
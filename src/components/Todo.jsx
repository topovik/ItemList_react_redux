import React, { Component } from 'react'
import './css/Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            score: 0
        }

        this.onUp = this.onUp.bind(this)
    }

    render() {
        return(
            <section className='todo'>
                <p className='text'>{this.props.todo.text}</p> 
                        <section className='score'>
                            <p>{this.state.score}</p>
                            <p>{this.props.todo.count}</p>
                        </section>
                        <section className='button'>
                            <button onClick={this.onUp}>up</button>
                            <button onClick={() => this.props.todoRemove(this.props.todo.id)}>remove</button>
                        </section>
            </section>
        );
    }

    onUp() {
        if(this.state.score < this.props.todo.count) {
            this.setState({score: this.state.score + 1})
        }
    }
}

export default Todo
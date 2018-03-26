import React, { Component } from 'react'
import '../components/css/AddTodo.css'

class AddTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            count: 0
        }

        this.onChangeText = this.onChangeText.bind(this)
        this.onChangeCount = this.onChangeCount.bind(this)
    }

    render() {
        return(
            <section className='header'>
                <span>Items:</span><input value={this.state.text} onChange={this.onChangeText} type="text"/>
                <span>Count:</span><input value={this.state.count} onChange={this.onChangeCount} type="number"/>
                <button className='add' onClick={() => this.props.todoAdd(this.state.text, this.state.count, Date.now())}>Add</button>
            </section>
        );
    }

    onChangeText(event) {
        this.setState({text: event.target.value})
    }

    onChangeCount(event) {
        this.setState({count: event.target.value})
    }

}

export default AddTodo
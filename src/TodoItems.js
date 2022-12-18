import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    const a=todoEntries.length
    
    return(
      
        <div>
          <p class="p">You have <strong> {a} </strong>todos remaining, add some task and click to delete if you have completed it</p>
       <ul className="theList">{listItems}</ul>
      
       </div>
    
       
    )
    
  }
}

export default TodoItems
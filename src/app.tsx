import React from 'react'
import { Component } from 'react'
import { Provider } from 'mobx-react'

import { TodoStore } from './todo.store'
import { TodoAdd } from './todo.add'
import { TodoList } from './todo.list'

export class App extends Component {
  private todoStore: TodoStore = new TodoStore()

  render() {
    return (
      <Provider todoStore={this.todoStore}>
        <div>
          <TodoAdd />
          <TodoList />
        </div>
      </Provider>
    )
  }
}

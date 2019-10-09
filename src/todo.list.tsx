import React from 'react'
import { observer, inject } from 'mobx-react'

import { TodoStore } from './todo.store'
import { TodoListItem } from './todo.list.item'

interface TodoListProps {
  todoStore?: TodoStore
}

const TodoListComponent = ({ todoStore: { todoList } }: TodoListProps) => (
  <>
    {todoList.map((todo, idx) => (
      <TodoListItem key={idx} todo={todo} />
    ))}
  </>
)

export const TodoList = inject('todoStore')(observer(TodoListComponent))

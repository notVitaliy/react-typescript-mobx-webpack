import React from 'react'

import { Todo } from './todo.store'

interface TodoListItemProps {
  todo: Todo
}

export const TodoListItem = ({ todo }: TodoListItemProps) => <div>{todo.task}</div>

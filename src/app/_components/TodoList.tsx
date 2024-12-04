'use client'
import { trpc } from '../_trpc/client'

export default function TodoList() {
  const todos = trpc.getTodos.useQuery();

  return (
    <div>
      <h1>Todos List</h1>
      <div>{JSON.stringify(todos.data)}</div>
    </div>
  )
}

import { AddTodoForm } from '../AddTodoForm'

export default function AddTodoFormExample() {
  return (
    <div className="p-4">
      <AddTodoForm onAdd={(title, desc) => console.log('Add todo:', title, desc)} />
    </div>
  )
}

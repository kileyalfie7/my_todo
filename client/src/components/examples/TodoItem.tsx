import { TodoItem } from '../TodoItem'

export default function TodoItemExample() {
  return (
    <div className="p-4 space-y-3">
      <TodoItem
        id="1"
        title="Hoàn thành báo cáo dự án"
        description="Cần hoàn thiện phần phân tích và kết luận"
        completed={false}
        onToggle={(id) => console.log('Toggle todo:', id)}
        onEdit={(id) => console.log('Edit todo:', id)}
        onDelete={(id) => console.log('Delete todo:', id)}
      />
      <TodoItem
        id="2"
        title="Họp với team marketing"
        completed={true}
        onToggle={(id) => console.log('Toggle todo:', id)}
        onEdit={(id) => console.log('Edit todo:', id)}
        onDelete={(id) => console.log('Delete todo:', id)}
      />
    </div>
  )
}

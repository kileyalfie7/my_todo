import { EditTodoDialog } from '../EditTodoDialog'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function EditTodoDialogExample() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="p-4">
      <Button onClick={() => setOpen(true)}>Mở dialog chỉnh sửa</Button>
      <EditTodoDialog
        open={open}
        onOpenChange={setOpen}
        todo={{
          id: '1',
          title: 'Hoàn thành báo cáo',
          description: 'Cần hoàn thiện phần kết luận'
        }}
        onSave={(id, title, desc) => console.log('Save:', id, title, desc)}
      />
    </div>
  )
}

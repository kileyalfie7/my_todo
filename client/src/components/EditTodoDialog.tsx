import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

interface EditTodoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  todo: {
    id: string;
    title: string;
    description?: string;
  } | null;
  onSave: (id: string, title: string, description?: string) => void;
}

export function EditTodoDialog({
  open,
  onOpenChange,
  todo,
  onSave,
}: EditTodoDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description || "");
    }
  }, [todo]);

  const handleSave = () => {
    if (todo && title.trim()) {
      onSave(todo.id, title.trim(), description.trim() || undefined);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent data-testid="dialog-edit-todo">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa công việc</DialogTitle>
          <DialogDescription>
            Cập nhật thông tin công việc của bạn
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="edit-title">Tiêu đề</Label>
            <Input
              id="edit-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nhập tiêu đề công việc"
              data-testid="input-edit-title"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="edit-description">Mô tả</Label>
            <Textarea
              id="edit-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Nhập mô tả chi tiết"
              rows={3}
              data-testid="input-edit-description"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            data-testid="button-cancel-edit"
          >
            Hủy
          </Button>
          <Button
            onClick={handleSave}
            disabled={!title.trim()}
            data-testid="button-save-edit"
          >
            Lưu thay đổi
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

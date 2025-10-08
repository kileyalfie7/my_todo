import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface AddTodoFormProps {
  onAdd: (title: string, description?: string) => void;
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), description.trim() || undefined);
      setTitle("");
      setDescription("");
      setIsExpanded(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-2">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          placeholder="Thêm công việc mới..."
          className="flex-1"
          data-testid="input-todo-title"
        />
        <Button
          type="submit"
          disabled={!title.trim()}
          data-testid="button-add-todo"
        >
          <Plus className="h-5 w-5 mr-2" />
          Thêm
        </Button>
      </div>
      
      {isExpanded && (
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Mô tả chi tiết (không bắt buộc)..."
          className="resize-none"
          rows={2}
          data-testid="input-todo-description"
        />
      )}
    </form>
  );
}

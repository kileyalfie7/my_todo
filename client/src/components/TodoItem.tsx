import { Check, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({
  id,
  title,
  description,
  completed,
  onToggle,
  onEdit,
  onDelete,
}: TodoItemProps) {
  return (
    <div
      className={cn(
        "group flex items-start gap-3 p-4 rounded-lg border bg-card hover-elevate transition-all",
        completed && "opacity-60"
      )}
      data-testid={`todo-item-${id}`}
    >
      <Checkbox
        checked={completed}
        onCheckedChange={() => onToggle(id)}
        className="mt-1"
        data-testid={`checkbox-todo-${id}`}
      />
      
      <div className="flex-1 min-w-0">
        <h3
          className={cn(
            "font-medium text-foreground transition-all",
            completed && "line-through text-muted-foreground"
          )}
          data-testid={`text-todo-title-${id}`}
        >
          {title}
        </h3>
        {description && (
          <p
            className={cn(
              "text-sm text-muted-foreground mt-1",
              completed && "line-through"
            )}
            data-testid={`text-todo-description-${id}`}
          >
            {description}
          </p>
        )}
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onEdit(id)}
          className="h-8 w-8"
          data-testid={`button-edit-${id}`}
        >
          <Pencil className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(id)}
          className="h-8 w-8 text-destructive hover:text-destructive"
          data-testid={`button-delete-${id}`}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

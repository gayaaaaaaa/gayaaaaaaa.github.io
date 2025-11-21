import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Save, X } from "lucide-react";

interface Category {
  id: string;
  name: string;
  color: string;
}

interface NoteEditorProps {
  initialTitle?: string;
  initialContent?: string;
  initialCategory?: string;
  categories: Category[];
  onSave?: (title: string, content: string, categoryId: string) => void;
  onCancel?: () => void;
}

export default function NoteEditor({
  initialTitle = "",
  initialContent = "",
  initialCategory = "",
  categories,
  onSave,
  onCancel,
}: NoteEditorProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [categoryId, setCategoryId] = useState(initialCategory);

  const handleSave = () => {
    if (title.trim() && content.trim() && categoryId) {
      onSave?.(title, content, categoryId);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {initialTitle ? '編輯筆記' : '建立新筆記'}
        </h2>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="note-title">筆記標題</Label>
          <Input
            id="note-title"
            placeholder="輸入筆記標題..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg font-semibold rounded-xl"
            data-testid="input-note-title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="note-category">科目分類</Label>
          <Select value={categoryId} onValueChange={setCategoryId}>
            <SelectTrigger className="rounded-xl" data-testid="select-category">
              <SelectValue placeholder="選擇科目" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="note-content">筆記內容</Label>
          <Textarea
            id="note-content"
            placeholder="開始記錄你的學習內容..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[300px] resize-none rounded-xl"
            data-testid="textarea-note-content"
          />
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Button
          variant="outline"
          onClick={onCancel}
          className="rounded-full"
          data-testid="button-cancel"
        >
          <X className="mr-2 h-4 w-4" />
          取消
        </Button>
        <Button
          onClick={handleSave}
          disabled={!title.trim() || !content.trim() || !categoryId}
          className="rounded-full"
          data-testid="button-save"
        >
          <Save className="mr-2 h-4 w-4" />
          儲存筆記
        </Button>
      </CardFooter>
    </Card>
  );
}

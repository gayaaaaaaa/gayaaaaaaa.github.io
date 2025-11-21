import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import emptyImage from "@assets/generated_images/Empty_state_cute_character_dc5b2d19.png";

interface EmptyStateProps {
  onCreateNote?: () => void;
}

export default function EmptyState({ onCreateNote }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-6 w-48 h-48">
        <img 
          src={emptyImage} 
          alt="No notes yet" 
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2">還沒有筆記喔！</h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        開始記錄你的學習旅程吧～建立第一個筆記，讓學習變得更有趣！
      </p>
      <Button 
        size="lg" 
        className="rounded-full px-6"
        onClick={onCreateNote}
        data-testid="button-create-first-note"
      >
        <PlusCircle className="mr-2 h-5 w-5" />
        建立第一個筆記
      </Button>
    </div>
  );
}

import emptyImage from "@assets/generated_images/Empty_state_cute_character_dc5b2d19.png";

interface EmptyStateProps {
}

export default function EmptyState({}: EmptyStateProps) {
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
        請在 content/notes/ 資料夾中建立 YAML 檔案來新增筆記。
      </p>
    </div>
  );
}

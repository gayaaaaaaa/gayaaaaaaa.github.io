import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Share2, Trash2, Edit } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";

interface NoteCardProps {
  id: string;
  title: string;
  content: string;
  category: string;
  categoryColor: string;
  date: Date;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onShare?: (id: string) => void;
}

export default function NoteCard({
  id,
  title,
  content,
  category,
  categoryColor,
  date,
  onEdit,
  onDelete,
  onShare,
}: NoteCardProps) {
  const truncatedContent = content.length > 120 ? content.substring(0, 120) + '...' : content;
  
  return (
    <Card className="hover-elevate transition-all duration-200 hover:shadow-lg" data-testid={`card-note-${id}`}>
      <CardHeader className="space-y-2 pb-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-lg line-clamp-2 flex-1" data-testid={`text-title-${id}`}>
            {title}
          </h3>
          <Badge 
            className="shrink-0 rounded-full" 
            style={{ backgroundColor: categoryColor }}
            data-testid={`badge-category-${id}`}
          >
            {category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground line-clamp-3" data-testid={`text-content-${id}`}>
          {truncatedContent}
        </p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between gap-2 pt-3 border-t">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span data-testid={`text-date-${id}`}>
            {formatDistanceToNow(date, { addSuffix: true, locale: zhCN })}
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8"
            onClick={() => onShare?.(id)}
            data-testid={`button-share-${id}`}
          >
            <Share2 className="h-4 w-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8"
            onClick={() => onEdit?.(id)}
            data-testid={`button-edit-${id}`}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8"
            onClick={() => onDelete?.(id)}
            data-testid={`button-delete-${id}`}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

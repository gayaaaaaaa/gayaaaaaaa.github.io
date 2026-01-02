import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Link } from "wouter";
import type { Note } from "@/types/note";

interface NoteCardProps {
  note: Note;
  category: string;
  categoryColor: string;
}

export default function NoteCard({
  note,
  category,
  categoryColor,
}: NoteCardProps) {
  const date = new Date(note.date);
  
  return (
    <Link href={`/notes/${note.slug}`}>
      <Card className="hover-elevate transition-all duration-200 hover:shadow-lg cursor-pointer" data-testid={`card-note-${note.id}`}>
        <CardHeader className="space-y-2 pb-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-lg line-clamp-2 flex-1" data-testid={`text-title-${note.id}`}>
              {note.title}
            </h3>
            <Badge 
              className="shrink-0 rounded-full" 
              style={{ backgroundColor: categoryColor }}
              data-testid={`badge-category-${note.id}`}
            >
              {category}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="pb-3">
          <p className="text-sm text-muted-foreground line-clamp-3" data-testid={`text-content-${note.id}`}>
            {note.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between gap-2 pt-3 border-t">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span data-testid={`text-date-${note.id}`}>
              {formatDistanceToNow(date, { addSuffix: true, locale: zhCN })}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

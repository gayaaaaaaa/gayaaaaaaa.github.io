import { useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Clock } from "lucide-react";
import MarkdownContent from "@/components/MarkdownContent";
import { notes, categories } from "@/data/content";

export default function NoteDetail() {
  const [, params] = useRoute("/notes/:slug");
  const note = notes.find((n) => n.slug === params?.slug);

  if (!note) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">找不到筆記</h2>
            <p className="text-muted-foreground">這篇筆記可能不存在</p>
          </div>
        </div>
      </div>
    );
  }

  const category = categories.find((c) => c.id === note.categoryId);
  const date = new Date(note.date);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              返回筆記列表
            </Button>
          </Link>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="space-y-4">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{note.title}</h1>
                <div className="flex items-center gap-4 flex-wrap">
                  {category && (
                    <Badge 
                      className="rounded-full" 
                      style={{ backgroundColor: category.color }}
                    >
                      {category.name}
                    </Badge>
                  )}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>
                      {formatDistanceToNow(date, { addSuffix: true, locale: zhCN })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-6">
            <div className="border-t pt-6">
              <MarkdownContent content={note.content} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


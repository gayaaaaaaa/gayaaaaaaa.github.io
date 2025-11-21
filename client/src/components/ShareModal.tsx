import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Check, Share2 } from "lucide-react";
import { useState } from "react";

interface ShareModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  shareUrl: string;
  noteTitle: string;
}

export default function ShareModal({
  open,
  onOpenChange,
  shareUrl,
  noteTitle,
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-primary/10 p-2">
              <Share2 className="h-5 w-5 text-primary" />
            </div>
            <DialogTitle>分享筆記</DialogTitle>
          </div>
          <DialogDescription>
            分享 "{noteTitle}" 給你的同學們！
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="share-link">分享連結</Label>
            <div className="flex gap-2">
              <Input
                id="share-link"
                value={shareUrl}
                readOnly
                className="rounded-xl"
                data-testid="input-share-link"
              />
              <Button
                size="icon"
                onClick={handleCopy}
                className="shrink-0"
                data-testid="button-copy-link"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          
          {copied && (
            <p className="text-sm text-primary font-medium">
              ✨ 已複製到剪貼簿！
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

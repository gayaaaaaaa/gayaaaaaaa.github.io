import { Button } from "@/components/ui/button";
import { PlusCircle, Share2 } from "lucide-react";
import heroImage from "@assets/generated_images/Students_studying_together_hero_e6447133.png";

interface HeroProps {
  onBrowseShared?: () => void;
}

export default function Hero({ onBrowseShared }: HeroProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 p-8 md:p-12">
      <div className="absolute inset-0 opacity-30">
        <img 
          src={heroImage} 
          alt="Students studying together" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/70" />
      </div>
      
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          歡迎來到你的學習空間 ✨
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          用可愛又簡單的方式記錄上課筆記，隨時與同學分享你的學習內容！
        </p>
        <div className="flex flex-wrap gap-3">
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full px-6 bg-background/60 backdrop-blur-sm"
            onClick={onBrowseShared}
            data-testid="button-browse-shared"
          >
            <Share2 className="mr-2 h-5 w-5" />
            瀏覽分享筆記
          </Button>
        </div>
      </div>
    </div>
  );
}

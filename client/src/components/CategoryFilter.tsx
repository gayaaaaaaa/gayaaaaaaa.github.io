import { Badge } from "@/components/ui/badge";

interface Category {
  id: string;
  name: string;
  color: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory?: string;
  onSelectCategory?: (categoryId: string | undefined) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        className={`rounded-full cursor-pointer transition-all ${
          !selectedCategory ? 'bg-primary text-primary-foreground' : 'bg-secondary hover-elevate'
        }`}
        onClick={() => onSelectCategory?.(undefined)}
        data-testid="badge-category-all"
      >
        全部
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category.id}
          className="rounded-full cursor-pointer transition-all hover-elevate"
          style={{
            backgroundColor: selectedCategory === category.id ? category.color : undefined,
          }}
          variant={selectedCategory === category.id ? undefined : "secondary"}
          onClick={() => onSelectCategory?.(category.id)}
          data-testid={`badge-category-${category.id}`}
        >
          {category.name}
        </Badge>
      ))}
    </div>
  );
}

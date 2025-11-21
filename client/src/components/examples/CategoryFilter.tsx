import CategoryFilter from '../CategoryFilter';
import { useState } from 'react';

export default function CategoryFilterExample() {
  const [selected, setSelected] = useState<string | undefined>();
  
  const categories = [
    { id: '1', name: '數學', color: 'hsl(280, 65%, 58%)' },
    { id: '2', name: '英文', color: 'hsl(320, 70%, 70%)' },
    { id: '3', name: '歷史', color: 'hsl(200, 75%, 60%)' },
    { id: '4', name: '科學', color: 'hsl(160, 70%, 55%)' },
  ];

  return (
    <CategoryFilter
      categories={categories}
      selectedCategory={selected}
      onSelectCategory={(id) => {
        setSelected(id);
        console.log('Selected category:', id);
      }}
    />
  );
}

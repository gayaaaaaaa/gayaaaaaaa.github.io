import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import NoteCard from "@/components/NoteCard";
import EmptyState from "@/components/EmptyState";
import { notes, categories } from "@/data/content";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = notes.filter(note => {
    const matchesCategory = !selectedCategory || note.categoryId === selectedCategory;
    const matchesSearch = !searchQuery || 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <Hero />
        
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <SearchBar onSearch={setSearchQuery} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {filteredNotes.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNotes.map(note => {
              const category = categories.find(c => c.id === note.categoryId);
              return (
                <NoteCard
                  key={note.id}
                  note={note}
                  category={category?.name || '未分類'}
                  categoryColor={category?.color || 'hsl(240, 6%, 88%)'}
                />
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

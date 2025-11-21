import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import NoteCard from "@/components/NoteCard";
import NoteEditor from "@/components/NoteEditor";
import EmptyState from "@/components/EmptyState";
import ShareModal from "@/components/ShareModal";

const MOCK_CATEGORIES = [
  { id: '1', name: '數學', color: 'hsl(280, 65%, 58%)' },
  { id: '2', name: '英文', color: 'hsl(320, 70%, 70%)' },
  { id: '3', name: '歷史', color: 'hsl(200, 75%, 60%)' },
  { id: '4', name: '科學', color: 'hsl(160, 70%, 55%)' },
  { id: '5', name: '地理', color: 'hsl(40, 85%, 65%)' },
];

const MOCK_NOTES = [
  {
    id: '1',
    title: '數學課 - 三角函數',
    content: '今天學習了 sin、cos、tan 的基本概念。三角函數在直角三角形中的應用非常重要，需要記住基本的公式和定理。正弦定理和餘弦定理是解題的關鍵工具。',
    categoryId: '1',
    date: new Date(Date.now() - 1000 * 60 * 30),
  },
  {
    id: '2',
    title: '英文課 - 現在完成式',
    content: 'Present perfect tense 用於表達過去發生但與現在有關的動作。常用的結構是 have/has + past participle。需要注意與過去簡單式的區別。',
    categoryId: '2',
    date: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    id: '3',
    title: '歷史課 - 文藝復興',
    content: '文藝復興運動起源於14世紀的義大利，是歐洲文化藝術的重要轉折點。代表人物包括達文西、米開朗基羅等大師。這個時期強調人文主義精神。',
    categoryId: '3',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24),
  },
  {
    id: '4',
    title: '科學課 - 光合作用',
    content: '光合作用是植物利用光能將二氧化碳和水轉換成葡萄糖和氧氣的過程。這個過程主要發生在葉綠體中，對地球生態系統至關重要。',
    categoryId: '4',
    date: new Date(Date.now() - 1000 * 60 * 60 * 48),
  },
];

export default function Home() {
  const [notes, setNotes] = useState(MOCK_NOTES);
  const [isEditing, setIsEditing] = useState(false);
  const [editingNote, setEditingNote] = useState<typeof MOCK_NOTES[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState("");
  const [shareModal, setShareModal] = useState<{ open: boolean; noteId: string; noteTitle: string }>({
    open: false,
    noteId: '',
    noteTitle: '',
  });

  const handleNewNote = () => {
    setEditingNote(null);
    setIsEditing(true);
  };

  const handleEditNote = (id: string) => {
    const note = notes.find(n => n.id === id);
    if (note) {
      setEditingNote(note);
      setIsEditing(true);
    }
  };

  const handleSaveNote = (title: string, content: string, categoryId: string) => {
    if (editingNote) {
      setNotes(notes.map(n => 
        n.id === editingNote.id 
          ? { ...n, title, content, categoryId }
          : n
      ));
    } else {
      const newNote = {
        id: String(Date.now()),
        title,
        content,
        categoryId,
        date: new Date(),
      };
      setNotes([newNote, ...notes]);
    }
    setIsEditing(false);
    setEditingNote(null);
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const handleShareNote = (id: string) => {
    const note = notes.find(n => n.id === id);
    if (note) {
      setShareModal({
        open: true,
        noteId: id,
        noteTitle: note.title,
      });
    }
  };

  const filteredNotes = notes.filter(note => {
    const matchesCategory = !selectedCategory || note.categoryId === selectedCategory;
    const matchesSearch = !searchQuery || 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar onNewNote={handleNewNote} />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {isEditing ? (
          <NoteEditor
            initialTitle={editingNote?.title}
            initialContent={editingNote?.content}
            initialCategory={editingNote?.categoryId}
            categories={MOCK_CATEGORIES}
            onSave={handleSaveNote}
            onCancel={() => {
              setIsEditing(false);
              setEditingNote(null);
            }}
          />
        ) : (
          <>
            <Hero onNewNote={handleNewNote} />
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <SearchBar onSearch={setSearchQuery} />
              <CategoryFilter
                categories={MOCK_CATEGORIES}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            {filteredNotes.length === 0 ? (
              <EmptyState onCreateNote={handleNewNote} />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredNotes.map(note => {
                  const category = MOCK_CATEGORIES.find(c => c.id === note.categoryId);
                  return (
                    <NoteCard
                      key={note.id}
                      id={note.id}
                      title={note.title}
                      content={note.content}
                      category={category?.name || '未分類'}
                      categoryColor={category?.color || 'hsl(240, 6%, 88%)'}
                      date={note.date}
                      onEdit={handleEditNote}
                      onDelete={handleDeleteNote}
                      onShare={handleShareNote}
                    />
                  );
                })}
              </div>
            )}
          </>
        )}
      </main>

      <ShareModal
        open={shareModal.open}
        onOpenChange={(open) => setShareModal({ ...shareModal, open })}
        shareUrl={`https://notes.example.com/share/${shareModal.noteId}`}
        noteTitle={shareModal.noteTitle}
      />
    </div>
  );
}

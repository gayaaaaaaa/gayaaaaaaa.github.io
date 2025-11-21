import NoteEditor from '../NoteEditor';

export default function NoteEditorExample() {
  const categories = [
    { id: '1', name: '數學', color: 'hsl(280, 65%, 58%)' },
    { id: '2', name: '英文', color: 'hsl(320, 70%, 70%)' },
    { id: '3', name: '歷史', color: 'hsl(200, 75%, 60%)' },
    { id: '4', name: '科學', color: 'hsl(160, 70%, 55%)' },
  ];

  return (
    <NoteEditor
      categories={categories}
      onSave={(title, content, categoryId) => {
        console.log('Save note:', { title, content, categoryId });
      }}
      onCancel={() => console.log('Cancel editing')}
    />
  );
}

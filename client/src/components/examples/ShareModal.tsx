import ShareModal from '../ShareModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ShareModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Share Modal</Button>
      <ShareModal
        open={open}
        onOpenChange={setOpen}
        shareUrl="https://notes.example.com/share/abc123"
        noteTitle="數學課 - 三角函數"
      />
    </div>
  );
}

export interface Note {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}


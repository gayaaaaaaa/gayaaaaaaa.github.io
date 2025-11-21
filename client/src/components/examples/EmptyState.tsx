import EmptyState from '../EmptyState';

export default function EmptyStateExample() {
  return <EmptyState onCreateNote={() => console.log('Create note clicked')} />;
}

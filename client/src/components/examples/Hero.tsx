import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero 
      onNewNote={() => console.log('New note clicked')}
      onBrowseShared={() => console.log('Browse shared clicked')}
    />
  );
}

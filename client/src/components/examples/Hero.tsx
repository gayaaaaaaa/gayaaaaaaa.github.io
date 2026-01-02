import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero 
      onBrowseShared={() => console.log('Browse shared clicked')}
    />
  );
}

import Navbar from '../Navbar';

export default function NavbarExample() {
  return <Navbar onNewNote={() => console.log('New note from navbar')} />;
}

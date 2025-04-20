import Place from './Place'; // Importing the Place component
import Search from './Search'; // Importing the Search component
import Settings from './Settings'; // Importing the Setting component
import'../styles/components/Header.scss'; 

// This is a simple Header component for a website
function Header() {
  return (
   <div className="Header">
    <Place/>
    <Search/>
    <Settings/>
    </div>
  );
}
export default Header;
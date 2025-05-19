import PinterestIcon from './svg/PinterestIcon';
import InicioIcon from './svg/InicioIcon';
import Explorar from './svg/Explorar';
import Crear from './svg/Crear';
import Actualizacion from './svg/Actualizacion';
import Mensajes from './svg/Mensajes';  
const Navbar = () => {
  return (
    <nav className="flex gap-4 flex-col items-center justify-center h-screen w-16 bg-white border-r border-gray-300">
      <div>
      <PinterestIcon  />
      <InicioIcon />
      <Explorar />
      <Crear />
      <Actualizacion />
      <Mensajes />
      </div>

      
    </nav>
  );
}

export default Navbar;
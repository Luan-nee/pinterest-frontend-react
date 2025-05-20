import PinterestIcon from './svg/PinterestIcon';
import InicioIcon from './svg/InicioIcon';
import Explorar from './svg/Explorar';
import Crear from './svg/Crear';
import Actualizacion from './svg/Actualizacion';
import Mensajes from './svg/Mensajes';  
import Configuracion from './svg/Configuracion';

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center justify-between h-screens bg-red-400 border-r border-gray-300 p-6 border-2 ">
      <div>
        <PinterestIcon  />
        <InicioIcon />
        <Explorar />
        <Crear />
        <Actualizacion />
        <Mensajes />
      </div>

      <div>
        <Configuracion />
      </div>
    </nav>
  );
}

export default Navbar;

import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {



  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/contact">contacts</Link>
      <button onClick="">Change theme</button>
    </nav>
  )
}

export default Navbar
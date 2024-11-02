const Welcome = () => {
  return (
    <div className="p-6 text-center">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/facilitomedia.appspot.com/o/imagenes%2Fbethany-fullsize.jpg?alt=media&token=69709a75-e68b-4734-a9bd-f060a6572d26"
        alt="brettany"
        loading="lazy"
        className="mx-auto mb-4 rounded-lg shadow-md w-1/2"
      />
      <p className="text-gray-700 text-lg">
        ¡Nos alegra verte en el lugar donde la pasión por las dos ruedas se
        convierte en una verdadera aventura! Aquí encontrarás todo lo que
        necesitas para disfrutar al máximo de tu moto
      </p>
      <p className="text-gray-700 text-lg">
        Esto es una BMW k 1600 Grand America , <b>Moto 1</b> Es una motocicletas
        touring mas lujosas y avanzadas de la marca alemana . Diseñada para
        quienes buscan un viaje comodo y lleno de tecnologia , sus
        caracteristicas destacadas : Caracteristicas principal : 1 motor y
        rendimiento : Tipo: 6 cilindros en linea , 4 tiempos . Refrigerado por
        liquidos . Cilindrana 1.649 cc. Potencia Máxima: Aproximadamente 160 hp
        (118 kW) a 7,750 rpm. Par Motor: Alrededor de 175 Nm a 5.250 rpm.
        Transmisión: 6 velocidades con cambio electrónico y sistema de
        asistencia al arranque. su costo es de 34,992.15 dólares estadounidenses
      </p>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav style={{ backgrounColor: "#D4C1E0" }} className="p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <a href="index.html" className="text-white hover:text-blue-400">
            Home
          </a>
        </li>
        <li>
          <a href="allpies.html" className="text-white hover:text-blue-400">
            All pies
          </a>
        </li>
        <li>
          <a href="contacto.html" className="text-white hover:text-blue-400">
            Contact
          </a>
        </li>
        <li>
          <a href="about.html" className="text-white hover:text-blue-400">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer
      style={{ backgrounColor: "#D4C1E0" }}
      className="text-white p-4 text-center"
    >
      <p className="text-sm">
        &copy; Bienvenidos a Moto prime, Todos los derechos reservados.
      </p>
    </footer>
  );
};

import React from 'react';
import LinkComponent from '../Link';
import useLogout from '@/src/hooks/useLogout';

const Navbar = () => {
  const { logout } = useLogout();

  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-evenly  fs-5 fw-bold fixed-top">
      <LinkComponent route="dashboard" name="Ver estadisticas" />
      <LinkComponent route="teams" name="Crear equipo" />
      <LinkComponent route="categories" name="Crear categoria" />
      <LinkComponent route="stadistics" name="Cargar resultados" />
      <button className="btn btn-outline-primary fw-bold fs-5" onClick={logout}>
        Salir
      </button>
    </div>
  );
};

export default Navbar;

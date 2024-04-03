'use client';

import useTeams from '@/src/hooks/useTeams';
import React from 'react';

const Categories = () => {
  const { nameTeam, setNameTeams, handleSendData } = useTeams();

  return (
    <div className="container bg-secondary-subtle h-40 d-inline-block p-5 d-flex flex-column align-items-center rounded w-50 text-center">
      <span className="fs-3 fw-bold">Crear una nueva categoria</span>
      <div className="d-flex flex-column align-items-center">
        <div className="input-group mb-3 mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese nombre de categoria"
            value={nameTeam}
            onChange={(e) => setNameTeams(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary mt-5"
          onClick={handleSendData}
          disabled={nameTeam.length === 0}
        >
          Crear categoria
        </button>
      </div>
    </div>
  );
};

export default Categories;
